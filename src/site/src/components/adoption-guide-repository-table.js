import React from "react"
import { useTable, useFilters } from "react-table"

export default function AdoptionGuideRepositoryTable(props) {
  const dataLoad = require("../data/repository.json")
  const data = dataLoad.filter(a => a[props.pet] == "x")

  const columns = React.useMemo(
    () => [
      {
        Header: "Who",
        accessor: "who",
        disableFilters: true,
        minWidth: 150,
      },
      {
        Header: "Description",
        accessor: "description",
        disableFilters: true,
        minWidth: 100,
        textAlign: "justify",
        fontSize: "12px",
      },
      {
        Header: "Supporting links",
        Cell: ({ row }) => (
          <div>
            <p>
              <a href={row.original.link1URL}>{row.original.link1}</a>
            </p>
            <p>
              <a href={row.original.link2URL}>{row.original.link2}</a>
            </p>
            <p>
              <a href={row.original.link3URL}>{row.original.link3}</a>
            </p>
          </div>
        ),
        disableFilters: true,
        minWidth: 200,
      },
    ],
    []
  )

  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

  const defaultColumn = React.useMemo(
    () => ({
      Filter: SelectColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters
  )

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps({
                    style: { minWidth: column.minWidth },
                  })}
                >
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps({
                        style: {
                          "text-align": cell.column.textAlign
                            ? cell.column.textAlign
                            : "center",
                          "font-size": cell.column.fontSize
                            ? cell.column.fontSize
                            : "",
                        },
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div></div>
    </div>
  )
}
