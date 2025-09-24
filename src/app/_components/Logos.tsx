import LogoLoop from "./helper/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiMysql,
  SiSpringboot,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMui,
  SiPandas,
  SiPostman,
  SiArduino,
  SiJira,
  SiCanva,
  SiScikitlearn,
  SiOpencv,
  SiPython,
  SiC,
  SiJavascript,
  SiNodedotjs,
  SiKubernetes,
  SiDocker,
} from "react-icons/si";

const logos = [
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },

  {
    node: <SiTailwindcss />,
    title: "Tailwind",
    href: "https://tailwindcss.com",
  },

  { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },

  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  { node: <SiMui />, title: "MUI", href: "https://mui.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiArduino />, title: "Arduino", href: "https://www.arduino.cc" },
  { node: <SiJira />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
  { node: <SiCanva />, title: "Canva", href: "https://www.canva.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  {
    node: <SiSpringboot />,
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
  },

  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  {
    node: <SiKubernetes />,
    title: "Kubernetes",
    href: "https://kubernetes.io",
  },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiC />, title: "C", href: "https://en.cppreference.com/w/c" },
  { node: <SiPandas />, title: "Pandas", href: "https://pandas.pydata.org" },
  {
    node: <SiScikitlearn />,
    title: "Scikit-learn",
    href: "https://scikit-learn.org",
  },

  { node: <SiOpencv />, title: "OpenCV", href: "https://opencv.org" },
];

export default function Logos() {
  return (
    <div className="w-full py-10 sm:py-5 md:py-8 lg:py-8 ">
      <LogoLoop
        logos={logos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#060010"
        ariaLabel="Technology partners"
      />
    </div>
  )
}
