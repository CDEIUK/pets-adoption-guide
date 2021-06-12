function getHierarchicalData() {
  var data = {
    id: 1,
    name: "Q1",
    type: "Root",
    description:
      "Which of the following best describes your intended use of data?",
    children: [
      {
        id: 2,
        name: "A1-1",
        type: "Type",
        description:
          "You hold the data and want to share it, or outsource the processing of it, to external parties / users",
        children: [
          {
            id: 3,
            name: "Q2",
            type: "Family",
            description:
              "Do you need to make available the raw data, or could you instead share insights derived from the data?",
            children: [
              {
                id: 4,
                name: "A2-1",
                type: "Organism",
                description: "Raw data",
                children: [
                  {
                    id: 6,
                    name: "Q3",
                    type: "Organism",
                    description:
                      "Does sensitive / personally identifiable information need to be included in the dataset that is shared, or could it be useful without it?",
                    children: [
                      {
                        id: 7,
                        name: "A3-1",
                        type: "Organism",
                        description:
                          "Sensitive information needs to be included",
                        children: [
                          {
                            id: 9,
                            name: "Q4",
                            type: "Organism",
                            description:
                              "Is the party you are sharing data with performing computation / analysis on your behalf, or for their own means?",
                            children: [
                              {
                                id: 10,
                                name: "A4-1",
                                type: "Organism",
                                description: "On my behalf",
                                children: [
                                  {
                                    id: 12,
                                    name: "Q5",
                                    type: "Organism",
                                    description:
                                      "Is it in important that the computation / analysis is done with low latency?",
                                    children: [
                                      {
                                        id: 13,
                                        name: "A5-1",
                                        type: "Organism",
                                        description: "Yes",
                                        children: [
                                          {
                                            id: 16,
                                            name: "RESULT",
                                            type: "Organism",
                                            description:
                                              "You should consider trusted execution environments. Click for further information.",
                                            link:
                                              "/pets-adoption-guide/adoption-guide/trusted-execution-environments", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                                            // link:
                                            //   "/adoption-guide/trusted-execution-environments",
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        id: 14,
                                        name: "A5-2",
                                        type: "Organism",
                                        description: "No",
                                        children: [
                                          {
                                            id: 15,
                                            name: "RESULT",
                                            type: "Organism",
                                            description:
                                              "You should consider homomorphic encryption. Click for further information.",
                                            link:
                                              "/pets-adoption-guide/adoption-guide/homomorphic-encryption", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                                            // link: "/adoption-guide/homomorphic-encryption",
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                id: 11,
                                name: "A4-2",
                                type: "Organism",
                                description: "For their own means",
                                children: [
                                  {
                                    id: 17,
                                    name: "RESULT",
                                    type: "Organism",
                                    description:
                                      "You should consider establishing a data sharing agreement. Click for further information.",
                                    link:
                                      "/pets-adoption-guide/adoption-guide/data-sharing-agreement", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                                    // link: "/adoption-guide/data-sharing-agreement",
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: 8,
                        name: "A3-2",
                        type: "Organism",
                        description:
                          "Data could be useful without sensitive information",
                        children: [
                          {
                            id: 99,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider using de-identification techniques. Click for further infrormation.",
                            link:
                              "/pets-adoption-guide/adoption-guide/de-identification", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/de-identification",
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: 5,
                name: "A2-2",
                type: "Organism",
                description: "Insights from the data",
                children: [
                  {
                    id: 987,
                    name: "QN",
                    type: "Organism",
                    description:
                      "Is the data such that generalisations can be made over a population?",
                    children: [
                      {
                        id: 986,
                        name: "AN-1",
                        type: "Organism",
                        description: "Yes",
                        children: [
                          {
                            id: 18,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider differential privacy. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/differential-privacy", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/differential-privacy",
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 985,
                        name: "AN-2",
                        type: "Organism",
                        description: "No",
                        children: [
                          {
                            id: 934,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider establishing a data sharing agreement. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/data-sharing-agreement", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/differential-privacy",
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 19,
        name: "A1-2",
        type: "Type",
        description:
          "You want to leverage data held by other parties / users, or use data held by others in combination with your own",
        children: [
          {
            id: 20,
            name: "Q2",
            type: "Family",
            description:
              "Could data processing be performed on the devices/servers of the parties involved, or does processing need to be performed centrally?",
            children: [
              {
                id: 21,
                name: "A2-1",
                type: "Organism",
                description: "Processing on remote devices/servers",
                children: [
                  {
                    id: 23,
                    name: "Q3",
                    type: "Organism",
                    description:
                      "Which of the following best describes your use case?",
                    children: [
                      {
                        id: 24,
                        name: "A3-1",
                        type: "Organism",
                        description:
                          "You want to train a machine learning model on the data",
                        children: [
                          {
                            id: 26,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider federated learning. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/federated-learning", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/federated-learning",
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 24,
                        name: "A3-100",
                        type: "Organism",
                        description:
                          "You want to perform tradional data science/statistical techniques on the data",
                        children: [
                          {
                            id: 26,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider federated analytics. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/federated-analytics", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/federated-analytics",
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 24,
                        name: "A3-1",
                        type: "Organism",
                        description:
                          "You want to derive a specific result from the collective data of the parties",
                        children: [
                          {
                            id: 26,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider multi-party computation. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/multi-party-computation", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/multi-party-computation",
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: 22,
                name: "A2-2",
                type: "Organism",
                description: "Processing centrally",
                children: [
                  {
                    id: 32,
                    name: "lksadn",
                    type: "Organism",
                    description:
                      "Does sensitive / personally identifiable information need to be included in the dataset that is shared, or could it be useful without it?",
                    children: [
                      {
                        id: 1022,
                        name: "A2-2",
                        type: "Organism",
                        description:
                          "Sensitive information needs to be included",
                        children: [
                          {
                            id: 32,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider establishing a data sharing agreement. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/data-sharing-agreement", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/data-sharing-agreement",
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 1027,
                        name: "A2-2",
                        type: "Organism",
                        description:
                          "Data could be useful without sensitive information",
                        children: [
                          {
                            id: 876,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "You should consider using de-identification techniques. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/de-identification", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/de-identification",
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  return data
}

export default getHierarchicalData
