"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./Modal";

import { FiAward, FiEye } from "react-icons/fi";
import LinkButton from "./LinkButton";

type AchievementData = {
  id: number;
  name: string;
  content: string;
  image: string;
  award: string;
};

export default function AchievementModal({ achievement }: { achievement: AchievementData }) {
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
              {achievement.name}
            </h2>

            <div className="space-y-4">
              <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {achievement.content}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FiAward className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Award
                </span>
              </div>
              <div className="px-4 py-3 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-300 font-semibold">
                  {achievement.award}
                </p>
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}


