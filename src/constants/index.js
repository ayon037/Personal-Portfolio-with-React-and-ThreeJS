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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "Bangladesh Computer Council (BCC)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2023 - February 2023",
      points: [
        "Learnt about software quality assurance and software testing and how they plan, control, analyze and implement different kind of softwares.",
        "Attented a session at Network Operation Center to get knowledge about how network links are monitored and security is assured of data center.",
        "Learn about Computer Incident Response Team (CIRT) and what they follor to ensure the security of any software.",
        "Visited National Data Center and got some overview about the maintenance of data and the planning for the security assurance",
        "Got an overview about an ongoing project of Bangla Language Enrichment which is under Bangladesh Computer Council."
      ],
    },
    {
      title: "Team Coordinator, App & Web Application",
      company_name: "MIST Innovation Club (MIC)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - March 2023",
      points: [
        "Collaborating with the team members to work on different projects.",
        "Arranged a workshop on basic HTML, CSS and Bootstrap to make the students familiar about how a webpage is formed.",
        "Participated on team meetings to make proper plans before any workshops or programs are held.",
      ],
    },
    {
      title: "Member, Mentor",
      company_name: "MIST Computer Club (MCC)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2020 - Present",
      points: [
        "Learnt about how a program is arranged.",
        "Taken some classes on different topics of algorithms and data structures.",
        "Arranged and participated on many online and onsite contests.",
        "Participated in all ICPC preliminary cotests.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "Personal portfolio which was made with a motto of making academic project based on basic HTML, CSS, BootStrap and Javascript.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "white-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ayon037/ayon037.github.io-",
    },
    {
      name: "Money Manager",
      description:
        "An academic project to get familiar with Java. Baiscally, the interface was made with GUI and the data was fetched with Java. An app to manage personal expenses.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/ayon037/Money_Manager",
    },
    {
      name: "Gym Management System",
      description:
        "An academic project on database to get familiar with how backend works. Basically, it's a gym management system where an user can keep track of all of his data on real time.",
      tags: [
        {
          name: "oracle",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "white-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sayedulabrar/projectgym",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };