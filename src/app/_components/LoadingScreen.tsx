"use client";

import { useEffect, useState } from "react";
import { GridScan } from "./helper/GridScan";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {

  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        onLoadingComplete();
        setIsMounted(false);
      }, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isMounted) return null;

  return (
    <div
      className="fixed inset-0 bg-bgcolor flex items-center justify-center z-[9999] transition-opacity duration-300"
    >
      <div className="absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      <div className="relative z-10">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle r="32" cy="40" cx="40" id="test"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect height="64" width="64" y="8" x="8"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}
