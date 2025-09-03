import Image from "next/image";

import Orb from "./_components/Orb";
import PixelBlast from "./_components/PixelBlast";
import SplitText from "./_components/SplitText";
import TextType from "./_components/TextType";
import Header from "./_components/Header";
import LogoLoop from "./_components/LogoLoop";
import Box from "@mui/material/Box";

import Aurora from "./_components/Aurora";

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
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import { Typography } from "@mui/material";

const frontend = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
 
  
  { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  { node: <SiMui />, title: "MUI", href: "https://mui.com" },
  
  { node: <SiOpencv />, title: "OpenCV", href: "https://opencv.org" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },

];

const backend =[
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  {
    node: <SiSpringboot />,
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
  },
  
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
]

const database =[
   { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
]

const dataScience =[
   { node: <SiPandas />, title: "Pandas", href: "https://pandas.pydata.org" },
  {
    node: <SiScikitlearn />,
    title: "Scikit-learn",
    href: "https://scikit-learn.org",
  },
]

const others =[
     { node: <SiArduino />, title: "Arduino", href: "https://arduino.cc" },
  { node: <SiJira />, title: "Jira", href: "https://jira.com" },
  { node: <SiCanva />, title: "Canva", href: "https://canva.com" },
  { node: <SiPostman />, title: "Postman", href: "https://postman.com" },
]

const items = [
  { label: "Home", href: "#" },
  { label: "Education", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Competitions", href: "#" },
  { label: "Certifications", href: "#" },
  { label: "About", href: "#" },
];

export default function page() {
  return (
    <>
      <Header />

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Aurora background - zIndex 0 */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Aurora
            colorStops={["#3d2793", "#5e518c", "#437f3b"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </Box>

        {/* Content above Aurora - zIndex 10 */}
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            gap: "32px",
          }}
        >
          {/* Left content */}
          <Box
            sx={{
              width: "60%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "60px",
            }}
          >

<SplitText
  text="Hello, I'm Nipun!"
  className="text-7xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <Typography variant="h2">a &nbsp;</Typography>
              <TextType
                text={["Full Stack Developer", "Problem Solver", "Coder"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter=""
              />
            </Box>
          </Box>

          {/* Orb aligned right */}
          <Box
            sx={{
              width: "40%",
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </Box>
        </Box>
      </Box>

      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Front End
      </Typography>

      <LogoLoop
        logos={frontend}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />

      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        back End
      </Typography>

      <LogoLoop
        logos={backend}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />
      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Data bases
      </Typography>

      <LogoLoop
        logos={database}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />

      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Data Science
      </Typography>

      <LogoLoop
        logos={dataScience}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />

      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Other tools
      </Typography>

      <LogoLoop
        logos={others}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />


      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <Box className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
          <Box className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2018</time>
            <Box className="text-lg font-black">Bandaranayek Collage Gampaha
</Box>
            GCE Ordinary Level - 2018(English literature,Tamil,ICT)
          </Box>
          <hr />
        </li>
        <li>
          <hr />
          <Box className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
          <Box className="timeline-end md:mb-10">
            <time className="font-mono italic">2021</time>
            <Box className="text-lg font-black">Bandaranayek Collage Gampaha</Box>
            
GCE Advanced Level - 2021 Physical Science Stream
          </Box>
          <hr />
        </li>
        <li>
          <hr />
          <Box className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
          <Box className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023-present</time>
            <Box className="text-lg font-black">University of Moratuwa </Box>
            B.Sc.(Hons) in Information
Technology
          </Box>
          <hr />
        </li>
        
      </ul>
    </>
  );
}
