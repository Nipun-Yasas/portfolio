import React from "react";

type LinkButtonProps = {
  href?: string;
  icon: React.ReactNode;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
};

export default function LinkButton({ href, icon, label, onClick }: LinkButtonProps) {
  const buttonContent = (
    <>
      <span className="relative z-10 inline-flex items-center py-[0.8em] pr-[1.2em] pl-[1.05em] transition-colors duration-400">
        <span className="w-[1.2em] h-[1.2em] mr-[0.5em] flex items-center justify-center">
          {icon}
        </span>
        {label}
      </span>
      <div className="absolute top-0 left-[-10%] w-[120%] h-full z-0 bg-black skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative font-medium text-sm tracking-wider rounded-[0.8em] cursor-pointer border-none bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-[ghostwhite] overflow-hidden active:scale-95 transition-transform inline-block"
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className="group relative font-medium text-sm tracking-wider rounded-[0.8em] cursor-pointer border-none bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-[ghostwhite] overflow-hidden active:scale-95 transition-transform"
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
