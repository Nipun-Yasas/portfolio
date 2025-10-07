"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import Image from "next/image";

import  ProjectModal  from "./ProjectModal";

type Card = {
  id: number;
  name: string;
  role: React.ReactNode;
  techStack: string[];
  shortDescription: React.ReactNode;
  content: React.ReactNode;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const CardStack = ({
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
    <div className={`relative w-full h-90 sm:h-120 md:h-185 lg:h-108 xl:h-110 ${className || ""}`}>
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
            <div className="w-full lg:w-1/2 flex-shrink-0 sm:h-75 md:h-90 relative mb-3 lg:mb-0 lg:mr-6">
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
                      className="px-2 py-1 text-xs font-medium bg-white/10 text-purple-200 rounded-md border border-white/20"
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

              <div className="flex items-center justify-between gap-4 pt-1 md:pt-0 lg:pt-0 xl:pt-0">
                <div className="flex items-center gap-4">
                  <ProjectModal project={card} />
                  {card.githubUrl && (
                    <a
                      href={card.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {card.liveUrl && (
                    <a
                      href={card.liveUrl}
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
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
