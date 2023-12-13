import React, { useState, useEffect } from 'react';

interface AnimatedNumberCounterProps {
  initialValue: number;
  duration: number;
  className?: string;
}

const AnimatedNumberCounter: React.FC<AnimatedNumberCounterProps> = ({
  initialValue,
  duration,
  className = '',
}) => {
  const [animatedValue, setAnimatedValue] = useState<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min(1, (timestamp - start) / (duration * 1000));
      const value = Math.floor(initialValue * progress);
      setAnimatedValue(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [initialValue, duration]);

  return (
    <span className={`transition-opacity duration-${duration}s ease-out ${className}`}>
      {animatedValue !== null ? (
        <>
          {animatedValue}
        </>
      ) : (
        initialValue
      )}
    </span>
  );
};

export default AnimatedNumberCounter;
