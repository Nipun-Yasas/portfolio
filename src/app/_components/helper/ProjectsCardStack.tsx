"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import Image from "next/image";

import ProjectModal from "./ProjectModal";
import LinkButton from "./LinkButton";

type Card = {
  id: number;
  name: string;
  status: string;
  role: React.ReactNode;
  techStack: string[];
  shortDescription: React.ReactNode;
  content: React.ReactNode;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const ProjectsCardStack = ({
  items,
  offset,
  scaleFactor,
  className,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  className?: string;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const handleCardClick = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  return (
    <div className={`relative w-full h-105 sm:h-120 md:h-185 lg:h-115 xl:h-110 ${className || ""}`}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-full bg-[#003366] border-none rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl cursor-pointer flex flex-col lg:flex-row overflow-visible"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
            onClick={handleCardClick}
          >
            <div className="w-full lg:w-1/2 flex-shrink-0 h-50 sm:h-75 md:h-90 relative mb-3 lg:mb-0 lg:mr-6">
            <div className="absolute top-2 left-4 z-10">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${card.status === "Completed"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                  }`}
              >
                {card.status}
              </span>
            </div>
              <Image
                src={card.image}
                alt={card.name}
                height={500}
                width={500}
                className="object-cover rounded-2xl w-full h-full"
              />

            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-between flex-1 relative">
              <div className="space-y-3">
                <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
                  {card.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {card.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full border border-purple-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 my-2 space-y-2">
                <div className="hidden md:block">
                  {card.shortDescription}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1 md:pt-0 lg:pt-0 xl:pt-0" onClick={(e) => e.stopPropagation()}>
                <ProjectModal project={card} />
                
                {card.githubUrl && (
                  <LinkButton
                    href={card.githubUrl}
                    icon={<FiGithub size={16} />}
                    label="Code"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                
                {card.liveUrl && (
                  <LinkButton
                    href={card.liveUrl}
                    icon={<FiExternalLink size={16} />}
                    label="Demo"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
