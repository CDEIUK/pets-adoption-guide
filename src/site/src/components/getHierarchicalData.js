function getHierarchicalData() {
  var data = {
    id: 1,
    name: "Q1",
    type: "QUESTION",
    description:
      "Which of the following best describes your intended use of data?",
    children: [
      {
        id: 2,
        name: "A1",
        type: "ANSWER",
        description:
          "Raw data needs to be accessed by / shared with another party",
        children: [
          {
            id: 3,
            name: "Q2",
            type: "QUESTION",
            description:
              "Does sensitive / personally identifiable information need to be included in the dataset, or could it be useful without it?",
            children: [
              {
                id: 4,
                name: "A2",
                type: "ANSWER",
                description:
                  "Data could be useful without sensitive information",
                children: [
                  {
                    id: 5,
                    name: "RESULT",
                    type: "RESULT",
                    description:
                      "You should consider applying de-identification techniques. Click for further information.",
                    link:
                      "/pets-adoption-guide/adoption-guide/de-identification", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                    // link: "/adoption-guide/de-identification",
                    children: [],
                  },
                ],
              },
              {
                id: 6,
                name: "A3",
                type: "ANSWER",
                description: "Sensitive information needs to be included",
                children: [
                  {
                    id: 7,
                    name: "Q3",
                    type: "QUESTION",
                    description:
                      "Are you providing access to the data so that a third party can carry out processing for you, or so they can carry out processing for their own purpose?",
                    children: [
                      {
                        id: 8,
                        name: "A5",
                        type: "ANSWER",
                        description: "Carrying out processing for me",
                        children: [
                          {
                            id: 9,
                            name: "Q4",
                            type: "QUESTION",
                            description:
                              "Homomorphic encryption or trusted execution environments could be useful. Which of the following best matches your use case? You may want to consider both options in any case.",
                            children: [
                              {
                                id: 10,
                                name: "ANSWER6",
                                type: "ANSWER",
                                description:
                                  "You need to perform calculations that are highly complex and/or have low latency requirements",
                                children: [
                                  {
                                    id: 11,
                                    name: "RESULT",
                                    type: "RESULT",
                                    description:
                                      "You should consider trusted execution environments. Click for further information.",
                                    link:
                                      "/pets-adoption-guide/adoption-guide/trusted-execution-environments", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                                    // link: "/adoption-guide/trusted-execution-environments",
                                    children: [],
                                  },
                                ],
                              },
                              {
                                id: 12,
                                name: "ANSWER7",
                                type: "ANSWER",
                                description:
                                  "You need to perform calculations that are relatively simple and/or have no strong latency requirements",
                                children: [
                                  {
                                    id: 13,
                                    name: "RESULT",
                                    type: "RESULT",
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
                        id: 14,
                        name: "ANSWER8",
                        type: "ANSWER",
                        description:
                          "Carrying out processing for their own purpose",
                        children: [
                          {
                            id: 15,
                            name: "RESULT",
                            type: "RESULT",
                            description:
                              "The emerging PETs discussed here  may not provide a suitable solution. Ensure you follow existing best practices for sharing and processing data. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/best-practice", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/best-practice",
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
        id: 16,
        name: "ANSWER9",
        type: "ANSWER",
        description: "Insights from the data need to be published",
        children: [
          {
            id: 17,
            name: "RESULT",
            type: "RESULT",
            description:
              "You should consider differential privacy. Click for further information.",
            link: "/pets-adoption-guide/adoption-guide/differential-privacy", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
            // link: "/adoption-guide/differential-privacy",
            children: [],
          },
        ],
      },
      {
        id: 18,
        name: "ANSWER10",
        type: "ANSWER",
        description:
          "You want to collaborate with multiple data partners to conduct analysis on your collective data",
        children: [
          {
            id: 19,
            name: "QUESTION5",
            type: "QUESTION",
            description:
              "Could data processing be performed on the devices / servers of the parties involved, or does processing need to be performed centrally?",
            children: [
              {
                id: 20,
                name: "ANSWER11",
                type: "ANSWER",
                description:
                  "Processing could be performed on remote devices / servers",
                children: [
                  {
                    id: 21,
                    name: "QUESTION6",
                    type: "QUESTION",
                    description:
                      "Which of the following best describes your use case?",
                    children: [
                      {
                        id: 22,
                        name: "ANSWER12",
                        type: "ANSWER",
                        description:
                          "You want to train a machine learning model on the data",
                        children: [
                          {
                            id: 23,
                            name: "RESULT",
                            type: "RESULT",
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
                        name: "ANSWER13",
                        type: "ANSWER",
                        description:
                          "You want to perform traditional data science / statistical analysis on the data",
                        children: [
                          {
                            id: 25,
                            name: "QUESTION7",
                            type: "QUESTION",
                            description:
                              "Federated analytics or multi-party computation could be useful. Which of the following best matches your use case? You may wish to consider both options in any case.",
                            children: [
                              {
                                id: 26,
                                name: "ANSWER14",
                                type: "ANSWER",
                                description:
                                  "Only a central party (you or one of your data collaborators) needs to know the result of the computation",
                                children: [
                                  {
                                    id: 27,
                                    name: "RESULT",
                                    type: "RESULT",
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
                                id: 28,
                                name: "ANSWER15",
                                type: "ANSWER",
                                description:
                                  "All parties contributing data can learn the result of the computation",
                                children: [
                                  {
                                    id: 29,
                                    name: "RESULT",
                                    type: "RESULT",
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
                    ],
                  },
                ],
              },
              {
                id: 30,
                name: "ANSWER16",
                type: "ANSWER",
                description: "Processing can only be performed centrally",
                children: [
                  {
                    id: 31,
                    name: "QUESTION8",
                    type: "QUESTION",
                    description:
                      "Does sensitive / personally identifiable information need to be included in the dataset, or could it be useful without it?",
                    children: [
                      {
                        id: 32,
                        name: "ANSWER17",
                        type: "ANSWER",
                        description:
                          "Data could be useful without sensitive information",
                        children: [
                          {
                            id: 33,
                            name: "RESULT",
                            type: "RESULT",
                            description:
                              "You should consider applying de-identification techniques. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/de-identification", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/de-identification",
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 34,
                        name: "ANSWER18",
                        type: "ANSWER",
                        description:
                          "Sensitive information needs to be included",
                        children: [
                          {
                            id: 35,
                            name: "RESULT",
                            type: "RESULT",
                            description:
                              "You should consider collecting and processing the data securely within a trusted execution environment. Click for further information.",
                            link:
                              "/pets-adoption-guide/adoption-guide/trusted-execution-environments", // annoyingly there's some dodgy path stuff that means prod and dev links need to be changed here manually. Technical debt!
                            // link: "/adoption-guide/trusted-execution-environments",
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
