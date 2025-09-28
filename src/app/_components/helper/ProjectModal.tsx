"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./Modal";

import { FiGithub, FiExternalLink, FiUser, FiTag } from "react-icons/fi";

type ProjectData = {
  id: number;
  name: string;
  role: React.ReactNode;
  techStack: string[];
  content: React.ReactNode;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectModal({ project }: { project: ProjectData }) {
  return (
    <Modal>
      <ModalTrigger className="text-center py-2 px-4 bg-gradient-to-r from-purple-600/90 to-fuchsia-600/90 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:from-purple-500/90 hover:to-fuchsia-500/90 transition-all duration-200 ">
        View More
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="w-full">

          <div className="space-y-6 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
              {project.name}
            </h2>

            <div className="space-y-4">
              <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.content}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FiTag className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FiUser className="h-4 w-4 text-fuchsia-600" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  My Role
                </span>
              </div>
              <div className="text-fuchsia-600 dark:text-fuchsia-400 font-medium">
                {project.role}
              </div>
            </div>
          </div>

          <div className="flex items-center hidden lg:block justify-between gap-4 pt-1 md:pt-0 lg:pt-0 xl:pt-0">
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={16} />
                  <span>Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={16} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}


