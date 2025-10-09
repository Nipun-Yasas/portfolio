"use client";
import { ProjectsCardStack } from "./helper/ProjectsCardStack";

const CARDS = [
  {
    id: 0,
    name: "Employee Management System",
    status: "Completed",
    role: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        I was responsible for developing the admin panel module, the layout of the web app, mode changing support, and theming.),
      </p>
    ),
    techStack: ["NextJS", "Spring Boot", "PostgreSQL", "MUI", "TypeScript", "JWT"],
    shortDescription: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
       A role-based employee management where super admins assign roles or block signups, while admins manage departments, designations, vacancies, and employee submissions such as events, claims, timesheets, leaves, and references. The system also includes AI-powered letter generation, allowing employees to request official letters that admins can generate and email. Users can track submissions, view statuses, and use a dashboard to manage to-dos, meetings, and upcoming events. </p>
    ),
    content: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        As part of our academic second-year software project, we built an employee management system for Creative Software PVT. It is a role-based system where users can sign up, and the super admin will either assign them a role or block them if they are not employees. Once the super admin assigns a role, users can log in. The system includes an admin panel to manage departments, designations, vacancies, and to review and manage employee submissions such as events, claims, timesheets, leaves, and references. It also features an AI-powered letter generation system that allows employees to request official letters, which admins can generate and send via email. Users can track and manage their submissions and view their statuses. There is also a dashboard to manage user to-dos, meetings, and view upcoming events.
      </p>
    ),
    image: "/ems.png",
    githubUrl:"https://github.com/LalalnaGurusinghe/Shiftly-EMS-FrontEnd-Creative_software.git",
    liveUrl: "https://shiftly-ems-front-end-creative-soft.vercel.app/"
  },
  {
    id: 1,
    name: "SkillForge Web App",
    status: "Ongoing",
    role: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        I was responsible for developing the admin panel module, the layout of the web app, mode changing support, and theming.),
      </p>
    ),
    techStack: ["NextJS", "MUI", "MongoDB"],
    shortDescription: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        A skill-exchange platform for university students to connect as learners, teachers, or both. Students earn credits by teaching others or buy credits to learn, ensuring a fair barter system. Includes AI-powered mentor search and in-app chat for learning sessions.
      </p>
    ),content: (
      <p>
       A skill-exchange platform that enables university students to connect as learners, teachers, or both through a barter-style system. Students update their profiles with the skills they want to learn and those they can teach. For those who only learn, they have to buy credits with money. These credits are used to book sessions with others and learn courses. Students who are learning and teaching can earn credits by teaching others and then use those credits to learn from others. This ensures a fair and sustainable barter economy. The platform also includes AI-powered search to help users find the right mentors, and a chat feature to schedule and discuss learning sessions.
      </p>
    ),
    image: "/skillforge.png",
    githubUrl: "https://github.com/Nipun-Yasas/SkillForge.git",
    liveUrl: "https://skill-forge-three.vercel.app/",
  },
  {
    id: 2,
    name: "Respair Pro",
    status: "Completed",
    role: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        I designed the power distribution system and programmed the servo motor to control breaths per minute and breath volume.</p>
    ),
    techStack: ["Esp32", "Arduino UNO", "MAX30101", "MPX1100", "DHT11"],
    shortDescription: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        A DIY ventilator that provides respiratory aid to patients, controlling breaths per minute and volume. Sensor data is processed via ESP32, with an Arduino Uno controlling the LCD and servo motor. Powered by a 12V 10A supply with buck converters for component distribution. </p>
    ),content: (
      <p>
       As part of our first-year hardware project, we built a DIY ventilator, which is used to provide respiratory aid to patients with breathing problems. It can control the breaths per minute and breath volumes, which are displayed on the LCD. We used a servo motor, MAX30101 blood oxygen sensor, MPX1100 pressure sensor, and DHT11 temperature sensor. Sensor data was processed through an ESP32, and an Arduino Uno board was used to control the LCD display and servo motor. We used a 12V 10A power supply to power the system and buck converters to distribute the necessary power among individual components.</p>
    ),
    image: "/respair.jpeg",
    githubUrl: "https://github.com/Nipun-Yasas/hardware-project.git",
    liveUrl: "https://drive.google.com/file/d/1brZ1zDw_Brzz7EYhrSa8fO--aS0t-mxl/view?usp=drive_link",
  }
  ,
  {
    id: 3,
    name: "Boarding Seeker",
    status: "Completed",
    role: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        As the team leader, I designed the basic layout, color scheme, and boarding display sections.</p>
    ),
    techStack: ["Figma"],
    shortDescription: (
      <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
        A UI design for an app that helps university students find boarding places. Connects boarding owners and students, with a user-friendly and easy-to-use interface.</p>
    ),content: (
      <p>
       As a design for Devthon 1.0, a web development competition, we created a UI design for an application that helps university students find boarding places. We got this idea because when we first came to university, it was hard for us to find a boarding place. So we created a UI design that connects boarding owners and university students to help them find their ideal boarding places. We made the UI user-friendly and easy to use.</p>
    ),
    image: "/boarding.png",
    liveUrl: "https://www.figma.com/design/GdqneN1yQYZOweZmi2Broo/Control-freaks?node-id=4-3&t=owdOib4NWhLOSpaI-1",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pt-5 md:pt-8 lg:pt-10">
      <div className="mx-auto px-5 md:px-10 lg:px-5 xl:px-10 overflow-hidden">
        <h2
          className="text-[clamp(1.6rem,4vw,2.6rem)] pb-15 font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Projects
        </h2>

        <div className="flex justify-center items-center w-full">
          <ProjectsCardStack items={CARDS} className="max-w-7xl w-full" />
        </div>
      </div>
    </section>
  )
}
