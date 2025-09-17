"use client";

import Link from "next/link"; 

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import TextType from "./_components/TextType";
import Header from "./_components/Header";
import LogoLoop from "./_components/LogoLoop";
import ProfileCard from "./_components/ProfileCard";
import Particles from "./_components/Particles";
import SplitText from "./_components/SplitText";

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
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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

const backend = [
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  {
    node: <SiSpringboot />,
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
  },

  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
];

const database = [
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
];

const dataScience = [
  { node: <SiPandas />, title: "Pandas", href: "https://pandas.pydata.org" },
  {
    node: <SiScikitlearn />,
    title: "Scikit-learn",
    href: "https://scikit-learn.org",
  },
];

const others = [
  { node: <SiArduino />, title: "Arduino", href: "https://arduino.cc" },
  { node: <SiJira />, title: "Jira", href: "https://jira.com" },
  { node: <SiCanva />, title: "Canva", href: "https://canva.com" },
  { node: <SiPostman />, title: "Postman", href: "https://postman.com" },
];

export default function page() {
  return (
    <>
      <Header />

      <Box
        sx={{
          width: "100%",
          height: "auto",

        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",

          }}
        >
          <Particles
            particleColors={["#6a37fb", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: {
              xs: "center",
              md: "flex-start",
              lg: "space-between",
            },
            textAlign: { xs: "center", md: "center", lg: "left" },
          }}
        >
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              mr: { xs: 0, md: 10 },
              order: { xs: 0, md: 2 },
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <ProfileCard
              name="Nipun Yasas"
              title="Software Engineer"
              handle="nipun"
              status=""
              contactText="Contact Me"
              avatarUrl="/profile.png"
              iconUrl="https://img.icons8.com/?size=100&id=HqIjKJP5pHjw&format=png&color=000000"
              grainUrl="https://img.icons8.com/?size=100&id=HqIjKJP5pHjw&format=png&color=000000"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
          </Box>

          <Box
            sx={{
              ml: { xs: 0, md: 3 },
              mt: { xs: 3, md: 5, lg: 0 },
              mx:{ xs: 2, sm: 5 },
              order: { xs: 1, md: 1 },
              width: { xs: "100%", md: "100%", lg: "50%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              justifyContent: { xs: "center", sm: "space-around", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
              position: "relative",
              zIndex: 0,
            }}
          >
            <Box>
              <SplitText
                text="Hello, I'm Nipun!"
                className="text-[clamp(1.75rem,4vw,3.5rem)]"
                font-semibold
              text-center
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
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                },
                gap: 1,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2", md: "2.5rem", lg: "4rem" },
                }}
              >
                a&nbsp;
              </Typography>
              <TextType
                text={["Full Stack Developer", "Problem Solver", "Coder"]}
              className="text-[clamp(1.75rem,4vw,3.5rem)]"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter=""
              />
            </Box>
            </Box>
            <Box sx={{ alignItems: "center", justifyContent: "center",mt:2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: { xs: 1, sm: 2 },
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: { xs: 2, sm: 3 },
                }}
              >
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/nipun-yasas-1126a8275"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: { xs: 44, sm: 56, md: 64 },
                    height: { xs: 44, sm: 56, md: 64 },
                    borderRadius: "50%",
                    border: "0.2rem solid #6a37fb",
                    color: "#6a37fb",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                      color: "#000",
                      bgcolor: "#4824a8",
                      transform: "scale(1.15) translateY(-4px)",
                      boxShadow: "0 0 25px #4824a8",
                      borderColor: "#4824a8",
                    },
                    "svg": { fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://github.com/Nipun-Yasas"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: { xs: 44, sm: 56, md: 64 },
                    height: { xs: 44, sm: 56, md: 64 },
                    borderRadius: "50%",
                    border: "0.2rem solid #6a37fb",
                    color: "#6a37fb",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                      color: "#000",
                      bgcolor: "#4824a8",
                      transform: "scale(1.15) translateY(-4px)",
                      boxShadow: "0 0 25px #4824a8",
                      borderColor: "#4824a8",
                    },
                    "svg": { fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } },
                  }}
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:nipuny74@gmail.com"
                  aria-label="E-mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: { xs: 44, sm: 56, md: 64 },
                    height: { xs: 44, sm: 56, md: 64 },
                    borderRadius: "50%",
                    border: "0.2rem solid #6a37fb",
                    color: "#6a37fb",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                      color: "#000",
                      bgcolor: "#4824a8",
                      transform: "scale(1.15) translateY(-4px)",
                      boxShadow: "0 0 25px #4824a8",
                      borderColor: "#4824a8",
                    },
                    "svg": { fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } },
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>

              <Button
                href="#"
                sx={{
                  mt: 1,
                  px: { xs: 2.5, sm: 3.5 },
                  py: { xs: 1, sm: 1.25 },
                  backgroundColor: "#000",
                  borderRadius: "9999px",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  color: "#4824a8",
                  letterSpacing: { xs: "0.15rem", sm: "0.2rem", md: "0.3rem" },
                  fontWeight: 600,
                  border: "2px solid #3c1a74",
                  textTransform: "none",
                  lineHeight: 1,
                  transition:
                    "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                 
                  "&:hover": {
                    transform: "scale3d(1.03, 1.03, 1)",
                    backgroundColor: "#3c1a74",
                    color: "#000",
                    boxShadow: "0 0 25px #3c1a74",
                    borderColor: "#3c1a74",
                  },
                }}
              >
                Hire me
              </Button>
            </Box>
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
            <Box className="text-lg font-black">
              Bandaranayek Collage Gampaha
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
            <Box className="text-lg font-black">
              Bandaranayek Collage Gampaha
            </Box>
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
            B.Sc.(Hons) in Information Technology
          </Box>
          <hr />
        </li>
      </ul>
    </>
  );
}
