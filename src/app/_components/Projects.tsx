"use client";
import { CardStack } from "./helper/CardStack";

const CARDS = [
  {
    id: 0,
    name: "Employee Management System",
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
    githubUrl: "https://github.com/yourusername/employee-management",
    liveUrl: "https://employee-management-demo.com",
  },
  {
    id: 1,
    name: "SkillForge Web App",
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
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://task-app-demo.com",
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto px-5 md:px-10 lg:px-5 xl:px-10 overflow-hidden">
        <h2
          className="text-[clamp(1.6rem,4vw,2.6rem)] mb-10 font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Projects
        </h2>

        <div className="flex justify-center items-center w-full">
          <CardStack items={CARDS} className="max-w-7xl w-full" />
        </div>
      </div>
    </section>
  )
}
