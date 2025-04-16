// TODO Add a couple lines about each project
const data = [
  {
    title: 'Secure Messaging using  Microservices Architecture',
    subtitle: '2015 BVP Hackathon',
    image: '/images/projects/nearestdollar.jpg',
    date: '2024-05-01',
    desc:
      'Built using Spring Boot, Docker, Kubernetes, Kafka '
      + 'Built microservices for authentication, messaging, upload, and notifications, supporting 10,000+ users'
      + 'Used JWT, WebSocket, and Kafka to enhance security, messaging, and media handling, reducing latency by 20%'
      + 'Deployed via CI/CD, improving deployment speed by 30% and cutting server costs by 15%.',
  },
  {
    title: 'JobSucces Platform',
    subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/harvest.jpg',
    date: '2015-09-20',
    desc:
      'Built using FireBase, Express, React, Jenkins, Kubernates, AWS, Google APIs  '
        + 'a job application platform for candidates and recruiters to manage listings and applications, '
      + 'Integrated Google Auth, AWS S3 for file storage, and Gemini API for resume analysis '
      + 'and Implemented CI/CD with Jenkins and Kubernetes for automated testing and deployment on EC2.',
  },
  {
    title: 'Space Potato',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2015-06-28',
    desc:
      'Launched a potato battery powered weather balloon with two cameras '
      + 'and gps transponder. Resulting photos were published in a coffee table book. '
      + 'You can email me for a copy.',
  },
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    date: '2015-05-15',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
];

export default data;
