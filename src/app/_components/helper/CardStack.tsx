"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: string;
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
    <div className={`relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] ${className || ""}`}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] dark:bg-black bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] cursor-pointer flex flex-col md:flex-row"
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
            <div className="w-full h-32 sm:h-40 md:w-1/2 md:h-full md:order-2 flex-shrink-0 relative">
              <Image 
                src={card.image} 
                alt={card.name}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="w-full md:w-1/2 md:order-1 flex flex-col justify-between md:pr-6 mt-4 md:mt-0 flex-1">
              <div className="font-normal text-neutral-700 dark:text-neutral-200 text-sm sm:text-base md:text-lg">
                {card.content}
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-neutral-500 font-medium dark:text-white text-base sm:text-lg md:text-xl">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200 text-sm sm:text-base md:text-lg">
                  {card.designation}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
