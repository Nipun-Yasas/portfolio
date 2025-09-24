import React from 'react';

export type SkillItem = {
  node: React.ReactNode;
  title: string;
};

export default function SkillCards({ items = [] }: { items: SkillItem[]}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
      {items.map((item) => (
        <div key={item.title} className="group">
          <div
            className="flex flex-col items-center p-4 bg-[#060010] rounded-2xl shadow transition-transform duration-200 ease-out transform-gpu will-change-transform group-hover:-translate-y-1 group-hover:shadow-lg cursor-default"
            aria-label={item.title}
          >
            <div className="text-4xl text-white">{item.node}</div>
            <span className="text-sm mt-2 text-white">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}