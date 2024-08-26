/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Solution Analysts',
    position: 'Software Development Intern',
    url: 'https://www.solutionanalysts.com/',
    startDate: '2023-01-05',
    endDate: '2023-06-01',
    summary: `Worked in Backend team to develop the API for project using Meta Developer Tools, FastAPI and AWS
    `,
    highlights: [
      'Implemented Apache Kafka to facilitate event-driven communication within a FAST-API Python-based system, improving scalability by 150% and reducing latency by 40%, leading to enhanced real-time processing capabilities.',
      'Integrated 18 WhatsApp Business APIs into the application, streamlining messaging functionalities and increasing user engagement by 35%.',
      'Redesigned and maintained the database schema, executing customized indexing which resulted in a 200% reduction in search query time and a 50% decrease in database load.',
      'Implemented Kafka Connect to integrate WhatsApp Business API, configuring connectors and managing data pipelines, which improved the efficiency and responsiveness of the messaging system by 45% and reduced message delivery time by 30%.',
    ],
  },

  {
    name: 'Solution Analysts',
    position: 'Software Development Intern',
    url: 'https://www.solutionanalysts.com/',
    startDate: '2022-05-01',
    endDate: '2023-08-01',
    summary: `Took up an internal work to develop the API for employee tracking and monitoring and fully automating the process
    `,
    highlights: [
      'Developed REST APIs using Time Series Analysis and K-Means Clustering, enhancing employee efficiency predictions by 25% and providing more accurate workforce analytics.      ',
      'Automated data retrieval for organizations through REST API, streamlining dashboard updates and improving overall operational efficiency, resulting in a 40% reduction in manual data entry and saving an average of 15 hours per week.      ',
      'Administered the deployment environment for a project by utilizing GitLab and Kubernetes, establishing continuous integration and deployment pipelines, which increased deployment frequency by 60% and reduced deployment errors by 30%.      ',
      'Utilized Apache JMeter for load testing and Selenium for unit testing, improving system reliability by 20% and reducing test execution time by 35%.      ',
    ],
  },
  {
    name: 'President\'s Office @ ASU',
    position: 'Technical Assistant',
    url: 'http://skepticalinvestments.biz',
    startDate: '2023-11-01',
    summary: `Worked in IT team to support daily operations and on call support to VIP staff
    `,
    highlights: [
      'Deskside support for over 200+ University VIP staff (under the Office of the President, Office of the Provost, Office of the General Council) and 20+ departments in both in-person and virtual roles, with on-call support as needed.',
      'Computer imaging and deployment for new users, both for Windows and Mac operating systems.',
      'Established asset management and tracking practices, increasing resource optimization for over a 1000+ devices.',
      'Systemized training materials and documentation, reducing on-boarding and research time.',
    ],
  },

  {
    name: 'Sudeep Tanwar Lab @ Nirma University',
    position: 'Research Aide',
    url: 'https://arthena.com',
    startDate: '2014-01-01',
    endDate: '2022-01-01',
    highlights: [
      'Acted as a research Aide for a year and worked on 4 major projects that utilized IoT, Machine Learning, and Web Frameworks.',
      'Deployed by machine learning and deep learning skills to build and hyper-tune models to accurately classify varieties of data',
      'Two projects were Featured in reputed conferences and journals and Other two projects were awarded funding by Indian space research organization',
    ],
  },
];

export default work;
