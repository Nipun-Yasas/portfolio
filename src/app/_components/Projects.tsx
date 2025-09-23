
"use client";
import { CardStack } from "./helper/CardStack";


const CARDS = [
  {
    id: 0,
    name: "E-Commerce Platform",
    designation: "Full Stack Web Application",
    content: (
      <p>
        A modern e-commerce platform built with Next.js, featuring user authentication, 
        payment integration, and real-time inventory management. Includes admin dashboard 
        and responsive design for optimal user experience.
      </p>
    ),
    image: "/profile.png",
  },
  {
    id: 1,
    name: "Task Management App",
    designation: "React Native Mobile App",
    content: (
      <p>
        Cross-platform mobile application for task and project management. 
        Features include real-time collaboration, push notifications, file sharing, 
        and offline synchronization capabilities.
      </p>
    ),
    image: "/profile.png",
  },
  {
    id: 2,
    name: "AI Chat Assistant",
    designation: "Machine Learning Project",
    content: (
      <p>
        Intelligent chatbot powered by natural language processing and machine learning. 
        Integrates with multiple APIs and provides personalized responses based on 
        user context and conversation history.
      </p>
    ),
    image: "/profile.png",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="w-full bg-bgcolor mt-3">
      <div className="mx-auto px-5 md:px-10 lg:px-5 xl:px-10 overflow-hidden">
        <h2
          className="text-[clamp(1.6rem,4vw,2.6rem)] mb-10 font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          Projects
        </h2>

        <div className="flex justify-center items-center w-full">
          <CardStack items={CARDS} className="max-w-6xl w-full" />
        </div>
      </div>

    </section>
  )
}
