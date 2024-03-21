import {
    airbnb,
    mobile,
    chat,
    blog,
    backend,
    creator,
    web,
    MachineLearning,
    javascript,
    // typescript,
    
    devtown,
    Definitics,
    wibi,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "https://drive.google.com/file/d/1aisE7mHDLaCwih9SdOo45Qw1_6zhIJ1S/view?usp=sharing",
      title: "Resume",
      external: true // Add a flag to indicate that this is an external link
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-end Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Machine Learning",
      icon: MachineLearning,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Definitics Software Solutions pvt ltd",
      icon: Definitics,
      iconBg: "#383E56",
      date: "May 2023 - Sep 2023",
      points: [
       " Developed a Full Stack website to monitor patient health conditions seamlessly, facilitating efficient doctor-patient interaction.",
        "Achieved 20% enhancement in website loading speed by integrating responsive user interfaces and optimizing webpage performance.",
       "Enhanced MongoDB performance for streamlined content storage, resulting in improved database performance and facilitating enhanced data processing for training machine learning models.",
        
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Wibi",
      icon: wibi,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Dec 2023",
      points: [
        "Designed and developed the official website for Wibi Conference, ensuring an user-friendly platform to effectively showcase event details, schedules, and highlights.",
        "Improved user experience by 25% through optimization of loading times and enhancement of SEO performance, resulting in increased responsiveness.",
        "Collaborated with cross-functional teams to gather requirements and implement solutions.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "DevTown",
      icon: devtown,
      iconBg: "#383E56",
      date: "July 2023",
      points: [
        "Implemented responsive Hotstar clone website from the ground up, ensuring optimal usability and user experience.",
        "Gained hands-on experience in creating engaging and user-friendly web interfaces.",
      ],
    },

  ];
  
  
  
  const projects = [
    {
      name: "BookHive",
      description:
        "Full-stack booking website with user authentication and advanced booking management, empowering users to securely create, delete, and update their property listings for rent.",
      tags: [
        {
          name: "React.js, Node.js, Express.js, MongoDB",
          color: "blue-text-gradient",
        },
        
      
      ],
      image: airbnb,
      source_code_link: "https://github.com/Jeevana1609/BookHive",
    },
    {
      name: "ChatterNet",
      description:
        "Developed a Full Stack chat application facilitating real-time conversations between users, promoting seamless communication and connectivity.",
      tags: [
        {
          name: "React.js, Node.js, Express.js, MongoDB, WebSockets",
          color: "blue-text-gradient",
        },
        /*{
          name: "JS",
          color: "green-text-gradient",
        },*/
      ],
      image: chat,
      source_code_link: "https://github.com/Jeevana1609/ChatterNet",
    },
    {
      name: "BlogHub",
      description:
        "Full Stack blog website enabling users to create, edit, and delete posts and implemented user authentication for enhanced security.",
      tags: [
        {
          name: "React.js, Node.js, Express.js, MongoDB, WebSockets",
          color: "blue-text-gradient",
        },
        /*{
          name: "JS",
          color: "green-text-gradient",
        },*/
      ],
      image: blog,
      source_code_link: "https://github.com/Jeevana1609/BlogHub",
    },
  ];
  
  export { services, technologies, experiences, projects };