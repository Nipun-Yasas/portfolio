"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./Modal";

import { FiGithub, FiExternalLink, FiUser, FiTag, FiEye } from "react-icons/fi";
import LinkButton from "./LinkButton";

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
      <ModalTrigger>
        <LinkButton
          icon={<FiEye size={16} />}
          label="More"
        />
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

            <div className="space-y-2 hidden md:block">
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

          <div className="flex items-center justify-between gap-4 pt-1 md:pt-0 lg:pt-0 xl:pt-0">
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <LinkButton
                  href={project.githubUrl}
                  icon={<FiGithub size={16} />}
                  label="Code"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              {project.liveUrl && (
                <LinkButton
                  href={project.liveUrl}
                  icon={<FiExternalLink size={16} />}
                  label="Demo"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}


