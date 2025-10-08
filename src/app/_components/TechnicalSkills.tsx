import Tabs from "./helper/Tabs";
import SkillCards from "./helper/SkillCards";

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
  SiPostgresql,
  SiRender,
  SiSwagger,
  SiSpringboot,
  SiJupyter,
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
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiKubernetes,
  SiDocker,
  SiC,
} from "react-icons/si";

const frontend = [
  {
    node: <SiJavascript />,
    title: "JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
  },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },

  {
    node: <SiTailwindcss />,
    title: "Tailwind",
  },

  { node: <SiVuedotjs />, title: "Vue.js" },
  {
    node: <SiHtml5 />,
    title: "HTML5",
  },

  { node: <SiFigma />, title: "Figma" },
  {
    node: <SiCss3 />,
    title: "CSS3",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
  },
  { node: <SiMui />, title: "MUI" },
];

const backend = [
  { node: <SiExpress />, title: "Express.js" },
  {
    node: <SiSpringboot />,
    title: "Spring Boot",
  },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiNodedotjs />, title: "Node.js" },
];

const database = [
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
];

const devops = [
  { node: <SiDocker />, title: "Docker" },
  {
    node: <SiKubernetes />,
    title: "Kubernetes",
  },
];

const programming = [
  { node: <SiPython />, title: "Python" },
  { node: <SiC />, title: "C" },
  { node: <SiCplusplus />, title: "C++" },
];

const ml = [
  { node: <SiPandas />, title: "Pandas" },
  {
    node: <SiScikitlearn />,
    title: "Scikit-learn",
  },
  { node: <SiOpencv />, title: "OpenCV" },
];

const others = [
  { node: <SiVercel />, title: "Vercel" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiArduino />, title: "Arduino" },
  { node: <SiJira />, title: "Jira" },
  { node: <SiCanva />, title: "Canva" },
  { node: <SiPostman />, title: "Postman" },
  { node: <SiRender />, title: "Render" },
  { node: <SiSwagger />, title: "Swagger" },
  { node: <SiJupyter />, title: "Jupyter" },
];

export default function TechnicalSkills() {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full h-[500px] sm:h-[375px] md:h-[400px] lg:h-[275px] rounded-2xl p-5 md:p-8 bg-[#003366]">
          <SkillCards items={frontend} />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full h-[500px] sm:h-[375px] md:h-[400px] lg:h-[275px] rounded-2xl p-5 md:p-8 bg-[#003366]">
          <SkillCards items={backend} />
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="w-full h-[500px] sm:h-[375px] md:h-[400px] lg:h-[275px] rounded-2xl p-5 md:p-8 bg-[#003366]">
          <SkillCards items={database} />
        </div>
      ),
    },
    {
      title: "DevOps",
      value: "devops",
      content: (
        <div className="w-full h-[500px] sm:h-[375px] md:h-[400px] lg:h-[275px] rounded-2xl p-5 md:p-8 bg-[#003366]">
          <SkillCards items={devops} />
        </div>
      ),
    },
    {
      title: "Programming",
      value: "programming",
      content: (
        <div className="w-full h-[500px] sm:h-[375px] md:h-[400px] lg:h-[275px] rounded-2xl p-5 md:p-8 bg-[#003366]">
          <SkillCards items={programming} />
        </div>
      ),
    },
    {
      title: "ML",
      value: "ml",
      content: (
        <div className="w-full h-[500px] sm:h-[375px] md:h-[400px] lg:h-[275px] rounded-2xl p-5 md:p-8 bg-[#003366]">
          <SkillCards items={ml} />
        </div>
      ),
    },
    {
      title: "Others",
      value: "others",
      content: (
        <div className="w-full h-[500px] sm:h-[375px] md:h-[400px] lg:h-[275px] rounded-2xl p-5 md:p-8 bg-[#003366]">
          <SkillCards items={others} />
        </div>
      ),
    },
  ];

  return (
    <section
      id="technicalskills"
      className="py-5 md:py-8 lg:py-10 max-w-8xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto">
        <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] mb-8 font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent ">
          Technical Skills
        </h2>
      </div>
      <div className="h-[36rem] sm:h-[28rem] md:h-[29rem] lg:h-[23rem] [perspective:1000px] relative b flex flex-col max-w-8xl mx-auto w-full items-start justify-start">
        <Tabs
          tabs={tabs}
          containerClassName="gap-2 overflow-x-auto no-scrollbar"
          contentClassName="rounded-2xl overflow-hidden"
        />
      </div>
    </section>
  );
}
