export const navLinks = [
  {
    id: "about",
    title: "Nhà thông minh",
  },
  {
    id: "work",
    title: "Thành phố hiện đại",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Thế giới vạn vật thông minh",
    icon: "/arduino.png",
  },
  {
    title: "Digi Style: MultiMedia",
    icon: "/canvas.png",
  },
  {
    title: "Digi Girl: STEAM Art",
    icon: "/tinkercad.png",
  },
  {
    title: "Siêu nhân lập trình web",
    icon: "/web.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.JS",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "figma",
    icon: "/tech/figma.webp",
  },
  {
    name: "wordpress",
    icon: "/tech/wordpress.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
];

const experiences = [
  {
    title: "Tổng quan khung cảnh",
    company_name: "ngôi nhà và sân vườn",
    icon: "/company/avm.webp",
    iconBg: "#383E56",
    image: "/smart_home/tong_quan.png",
  },
  {
    title: "Mặc trước của ngôi nhà",
    company_name: "Cảm biến của ngôi nhà",
    icon: "/company/sparkbright.webp",
    iconBg: "#383E56",
    image: "/smart_home/tong_quan.png",
  },
  {
    title: "Sân vườn",
    company_name: "Sân vườn được thiết kế phù hợp với ngôi nhà",
    icon: "/company/avm.webp",
    iconBg: "#383E56",
    image: "/smart_home/san_vuon.png",
  },
  {
    title: "Bên hông vườn của ngôi nhà",
    company_name: "",
    icon: "/company/avm.webp",
    iconBg: "#383E56",
    image: "/smart_home/ben_hong.png",
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
    name: "Om Patel",
    image: "/socialmedia/behance.svg",
    link: "https://www.behance.net/omthecreator",
  },
  {
    id: 2,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Om Patel",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/om-patel-401068143/",
  },
  {
    id: 3,
    testimonial:
      "Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
    name: "Om Patel",
    image: "/socialmedia/dribble.svg",
    link: "https://dribbble.com/om2121",
  },
  {
    id: 4,
    testimonial:
      "Also do check out my UI/UX Portfolio where I have shared by design studies.",
    name: "Om Patel",
    image: "/socialmedia/portfolio.svg",
    link: "https://omthecreator.netlify.app/",
  },
  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Om Patel",
    image: "/tech/github.webp",
    link: "https://github.com/omunite215",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: string;
}[] = [
  {
    name: "Center of City",
    description: "",
    tags: [
      {
        name: "hiendai",
        color: "blue-text-gradient",
      },
      {
        name: "congnghie",
        color: "green-text-gradient",
      },
    ],
    image: "/tp_thongminh/Image_3.png",
    platform: "In 3D",
    deploy_link: "",
  },
  {
    name: "Quán mì ranmen",
    description: "",
    tags: [
      {
        name: "nhatban",
        color: "red-text-gradient",
      },
      {
        name: "thongminh",
        color: "orange-text-gradient",
      },
      {
        name: "hiendai",
        color: "blue-text-gradient",
      },
    ],
    image: "/tp_thongminh/Image_2.png",
    source_code_link: "",
    platform: "",
    deploy_link: "",
  },
  {
    name: "",
    description: "",
    tags: [
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/tp_thongminh/Image_4.png",
    source_code_link: "https://github.com/omunite215/hoobank",
    platform: "Vercel",
    deploy_link: "https://hoobankbyom.netlify.app/",
  },
  {
    name: "MERN Dashboard",
    description:
      " Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: "/tp_thongminh/mern.png",
    source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
    platform: "Web",
    deploy_link: "https://admin-frontend-r705.onrender.com/",
  },
  {
    name: "Metaverse Web 3.0",
    description:
      "A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: "/tp_thongminh/metaverse.png",
    source_code_link: "https://github.com/omunite215/Project_Metaverse",
    platform: "Vercel",
    deploy_link: "https://project-metaverse-beta.vercel.app/",
  },
  {
    name: "Issue Tracker",
    description:
      "A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "shadCN",
        color: "orange-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
    ],
    image: "/tp_thongminh/issuetracker.png",
    source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
    platform: "Vercel",
    deploy_link: "https://project-issue-tracker.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
