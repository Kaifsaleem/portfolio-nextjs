import { Company, PersonalDetails, Project } from './types';

const personalDetails: PersonalDetails = {
  name: 'Kaif Saleem',
  logo: '/images/logo-dark.svg',
  about:
    'A fresher with experience, this line says exactly who he is. He is a software developer who crafts beautiful web and apps. His perfect balance of technical & managerial skills stands him apart from the crowd.',
  socialMedia: [
    {
      link: 'mailto:kabirsaleem7262@gmail.com',
      image_file: '/images/icons/mail.svg',
      alt_text: 'Mail'
    },
    {
      link: 'https:/linkedin.com/in/kaif-saleem-81319122a',
      image_file: '/images/icons/linkedin.svg',
      alt_text: 'LinkedIn'
    },
    {
      link: 'https:/github.com/Kaifsaleem',
      image_file: '/images/icons/github.svg',
      alt_text: 'Github'
    }
  ],
  work: {
    company: 'Cubosquare',
    designation: 'Backend Developer Intern',
    logo: '/images/companies/cubosquare.png'
  },
  resume: '/KAIF_SALEEM_RESUME.pdf',
  profile_img: '/images/bob.png',
  calendyUrl: 'https://calendly.com/kaifsaleem1405'
};

const projects: Project[] = [
  {
    slug: 'examcell',
    name: 'ExamCell',
    tagline: 'AI-powered online exam monitoring system',
    description:
      'ExamCell is an AI-powered online exam monitoring system designed to enhance academic integrity. It allows institutes to conduct secure online exams with real-time face tracking, automated cheating detection, and role-based access control. Students can take exams within a controlled environment, while teachers and admins can monitor activities in real-time. The system ensures fair assessments through auto-submission on multiple violations, detailed analytics, and seamless user experience with React and NestJS integration.',
    img: '/images/projects/image.png',
    tags: [
      'NextJS',
      'NestJS',
      'MongoDB',
      'JWT',
      'MediaPipe',
      'WebSockets',
      'Docker',
      'Figma',
      'Git'
    ],
    category: ['Web', 'Testing', 'AI', 'Security', 'Education'],
    featured: true,
    github: 'https://github.com/Kaifsaleem/examcell-frontend'
  }
];

const companies: Company[] = [
  {
    name: 'Cubosquare',
    logo_url: '/images/companies/cubosquare.png',
    featured: true,
    position: 'Backend Developer Intern',
    startDate: 'October 2024',
    endDate: 'Present',
    responsibilities: [
      'Developed and optimized RESTful APIs using NestJS, improving data retrieval efficiency and system scalability',
      'Implemented secure authentication and authorization mechanisms with JWT and role-based access control (RBAC), enhancing data security'
    ]
  }
];

const githubDetails = {
  stargazers_count: 0,
  forks_count: 0,
  watchers_count: 0
};

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  return personalDetails;
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  return projects;
}

export async function getCompanyDetails(): Promise<Company[] | boolean> {
  return companies;
}

export async function getGithubDetails(): Promise<unknown> {
  return githubDetails;
}
