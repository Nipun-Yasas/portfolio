"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/textarea rounded-md p-[2px] pb-0 transition duration-300"
      >
        <textarea
          ref={ref}
          className={`shadow-input placeholder-text-neutral-600 w-full min-h-[120px] rounded-md border-none bg-[#110C23] px-3 py-2 text-sm text-white transition duration-400 group-hover/textarea:shadow-none placeholder:text-neutral-400 focus-visible:ring-0 outline-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
        />
      </motion.div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };