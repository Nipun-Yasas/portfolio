"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import AchievementModal from "./AchievementModel";

type Card = {
  id: number;
  name: string;
  shortDescription: string;
  content: string;
  image: string;
  award: string;
};

export const AchievementsCardStack = ({
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
    <div className={`relative w-full h-125 sm:h-130 md:h-150 lg:h-109 xl:h-110 ${className || ""}`}>
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
            <div className="w-full lg:w-1/2 flex-shrink-0 h-60 sm:h-75 md:h-90 relative mb-3 lg:mb-0 lg:mr-6">
              
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

                <div className="flex-1 my-2">
                  <p className="text-neutral-300 font-normal text-sm sm:text-base leading-relaxed">
                    {card.shortDescription}
                  </p>
                </div>
              </div>
              <div className="" onClick={(e) => e.stopPropagation()}>
                <AchievementModal achievement={card} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
