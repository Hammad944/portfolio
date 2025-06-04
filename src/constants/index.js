import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  angular,
  nodejs,
  mongodb,
  mysql,
  git,
  // aptihealthWeb,
  // aptihealthApp,
  // zealWeb,
  // zealApp,
  // rollWeb,
  // rollApp,
  linkedIn,
  github,
  salvay,
  dm,
  nextstep,
  gml,
  lims,
  cms,
  csharp,
  dotnetcore,
  sql
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: ".NetCore/NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript/C# Developer",
    icon: creator,
  },
  {
    title: "Ionic Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: ".NET Core",
    icon: dotnetcore,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Salvay",
    company_website: "https://www.salvay.io/",
    icon: salvay,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      "Developed frontend using Angular 16 and TailwindCss",
      "Translated Figma designs into responsive Angular components",
      "Built a desktop app with Electron, including deep linking for web-based signup/sign-in",
      "Developed backend using Node.js (TypeScript), PostgreSQL, and MongoDB",
      "Implemented real-time leaderboards using WebSockets",
      "Integrated with Wire Chain (blockchain), developed and deployed smart contracts"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Deline Media",
    company_website: "http://delinemedia.com/",
    icon: dm,
    iconBg: "#FFFFFF",
    date: "Apr 2022 - Jun 2022",
    points: [
      "Contributed to medical software projects using Angular, focusing on responsive and maintainable UI development.",
      "Worked on product-based healthcare solutions aligned with real-world clinical workflows.",
      "Enhanced frontend components for modules like patient records, lab interfaces, and dashboards.",
      "Developed and maintained backend APIs using Node.js to support healthcare application features.",
      "Collaborated with cross-functional teams to deliver reliable, high-quality medical software.",
      "Followed clean code practices and participated in regular code reviews for performance and consistency.",
      "Migration of Angular 7 to Angular version 15"
    ],

  },
  {
    title: "Associate Software Developer",
    company_name: "NextStep Business Solution",
    company_website: "https://www.nextstep.pk/",
    icon: nextstep,
    iconBg: "#FFFFFF",
    date: "Nov 2020 - Mar 2022",
    points: [
      "Developed new features for the Online Lab Management System (LIMS) and Hospital Management System.",
      "Built secure and scalable backend APIs using .NET Core and .NET Framework.",
      "Created dynamic and user-friendly frontend interfaces using Angular.",
      "Collaborated with senior developers and QA teams to ensure high-quality releases.",
      "Contributed to healthcare solutions used by over 150 clients across Pakistan.",
      "Improved system performance and usability by optimizing backend processes and frontend workflows."
    ],

  }
];

const projects = [
  {
    name: "Wire Games",
    description:
      "A cross-platform web portal and desktop application built with Angular and Electron, the Game Launcher App enables users to sign up and sign in via deep linking through the web. It integrates with platforms like Steam, Xbox, and Battle.net to manage and launch games from a unified interface. The backend, developed using Node.js (TypeScript) with PostgreSQL and MongoDB, supports real-time leaderboards via WebSockets, ensuring a seamless and interactive gaming experience across both web and desktop environments.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "electron",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      }
    ],
    image: gml,
    hosted_link: "https://wire.wire.foundation/",
  },
  {
    name: "Clinic Management System | Ovada",
    description:
      "The Clinic Management System is a comprehensive healthcare solution designed to streamline clinic operations.It offers features such as appointment scheduling, patient records management, billing, and inventory control.This system enhances efficiency by providing doctors and staff with real - time access to patient data, simplifying administrative tasks, and improving patient care.Ovada Clinic Management System is a user-friendly and scalable solution tailored to meet the specific needs of healthcare providers, ensuring smooth clinic operations and improved patient experiences",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "laraval",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      }
    ],
    image: cms,
    hosted_link: "https://citimed.ovadamd.com/",
  },
  {
    name: "Laboratory Management System | LIMS",
    description:
      "comprehensive platform designed to streamline lab operations, from sample management to result reporting. This system manages workflows, automates data capture, and ensures data integrity, supporting lab technicians and administrators in processing high volumes of tests efficiently. Key features likely include sample tracking, test scheduling, results entry and validation, integration with diagnostic equipment, and automated report generation using Crystal Reports. The LIMS may also offer compliance features to adhere to regulatory standards, making it a versatile tool for lab operations across healthcare facilities",
    tags: [
      {
        name: "angular ",
        color: "blue-text-gradient",
      },
      {
        name: ".netcore",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "entityframework",
        color: "blue-text-gradient",
      },
      {
        name: "dapper",
        color: "green-text-gradient",
      }
    ],
    image: lims,
    hosted_link: "https://getzeal.co/",
  },
  // {
  //   name: "Zeal App",
  //   description:
  //     "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
  //   tags: [
  //     {
  //       name: "react-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sendgrid",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: zealApp,
  //   hosted_link:
  //     "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  // },
  // {
  //   name: "Roll Web",
  //   description:
  //     "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "formik",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollWeb,
  //   hosted_link: "https://app.tryroll.com/",
  // },
  // {
  //   name: "Roll App",
  //   description:
  //     "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
  //   tags: [
  //     {
  //       name: "react-native-web",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "storybook",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollApp,
  //   hosted_link:
  //     "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  // },
];

const personalInfo = {
  name: "Hammad",
  fullName: "Hammad Sipra",
  email: "hammadabbas944@gmail.com",
  role: "Software Developer",
  about: `I'm a full-stack developer with experience of building scalable and 
  efficient web applications. I specialize in Angular (latest versions) and translating
   Figma designs into clean, responsive UI components. On the backend, I work extensively
    with Node.js (TypeScript), PostgreSQL, and MongoDB to create robust, high-performance APIs. 
    I also have strong experience with .NET Core, building secure and maintainable Web APIs
     using Entity Framework Core, Dapper, and SQL Server. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1dwPd1lkCQx8RpvPRrHSD882YQDgUY3VR/view",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/hammadsipra/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/shridharrai",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
