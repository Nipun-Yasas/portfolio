'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="loading-screen opacity-0 pointer-events-none">
        <div className="loader-custom"></div>
      </div>
    );
  }

  return (
    <div className="loading-screen">
      <div className="loader-custom"></div>
    </div>
  );
}