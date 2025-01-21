import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a Computer Science graduate from IIT Bhubaneswar and a passionate full-stack developer skilled in building robust, scalable web applications. With 1.5 years of hands-on experience, I specialize in front-end technologies like React, Next.js and Angular, along with back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. My aim is to apply my expertise to develop innovative solutions that drive business growth and provide exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June, 2023 - Jan, 2025",
    role: "Lead Frontend Developer",
    company: "Deloitte USI",
    description: `Led UI development for Deloitte's SaaS product, DocuEdge, enabling scalable database management with ReactJs. Built reusable components for asynchronous API data fetching and real-time communication via TCP, HTTP, and WebSocket. Developed custom React hooks using ES6+ and tools like Webpack. Boosted testing efficiency by 150% with Jasmine and Selenium. Created responsive web applications with advanced CSS and JavaScript. Reduced deployment time by 50% through CI/CD pipelines with AWS and Terraform.`,
    technologies: ["ReactJS", "Javascript", "Jasmine", "Selenium", "AWS"],
  },
  {
    year: "May, 2022 - July, 2022",
    role: "Research & Innovation Intern",
    company: "Tata Consultancy Services",
    description: `Enhanced code control and maintainability by upgrading a 5-year-old legacy Angular8 codebase to Angular13 version, enhancing robustness by using Server-Side Rendering (SSR) & Client-Side Rendering (CSR) techniques. Increased UI test coverage by 43% using Jest, improving component reliability and testing comprehensiveness.`,
    technologies: ["HTML", "SCSS", "Angular", "Typescript"],
  },
  {
    year: "Dec, 2021 - Jan, 2022",
    role: "DSA Tutor",
    company: "Neomentors",
    description: `Facilitated online classes and sessions, mentoring hundreds of students in Data Structures and Algorithms.`,
    technologies: ["Data Structures", "Algorithms", "CPP", "Java"],
  },
];

export const PROJECTS = [
  {
    title: "Social Media Application",
    image: project1,
    description:
      "Developed a responsive social media platform with features like likes, comments, and trending videos. Optimized search with Trie algorithm and integrated Google OAuth for seamless login.",
    technologies: ["HTML", "CSS", "ReactJS", "Node.js", "MongoDB"],
  },
  {
    title: "Modern Youtube Clone",
    image: project2,
    description:
      "Designed and implemented YouTube-like video streaming features, including home content, channels, and recommendations. Deployed via Kubernetes, Docker, and AWS CloudFront for scalability and performance.",
    technologies: ["HTML", "SCSS", "Angular", "AWS CloudFront", "Kubernetes"],
  },
  {
    title: "Nuiz, The News Website App",
    image: project3,
    description:
      "A news website delivering the latest updates across sports, business, politics, entertainment, health, and technology. It integrates three APIs to fetch data for news, COVID updates, and weather.",
    technologies: ["HTML", "CSS", "EJS", "Node", "Javascript"],
  },
  {
    title: "Pathfinding Visualizer",
    image: project4,
    description:
      "Facilitates user-friendly visualization of sorting and pathfinding algorithms like A*, Tim Sort, Radix Sort, and Merge Sort using React, JavaScript, and Pygame for interactive and engaging representations.",
    technologies: ["ReactJS", "Javascript", "Pygame", "Algorithms"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9502931419",
  email: "cs34@iitbbs.ac.in",
};
