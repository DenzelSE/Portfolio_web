
"use client"
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface Square {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const FallingSquares: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>([]);
  const { theme } = useTheme();
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const generateSquares = (count: number): Square[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 100, // Start above viewport
      size: Math.random() * 25 + 50, // Sizes from 5px to 30px
      speed: Math.random() * 0.02 + 0.01, // Slower falling speed
      opacity: Math.random() * 0.4 + 0.2, // Opacity between 0.2 and 0.6
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5, // Random rotation direction and speed
    }));
  };

  const updateSquarePosition = (square: Square, deltaTime: number) => {
    let newY = square.y + square.speed * deltaTime;
    let newRotation = square.rotation + square.rotationSpeed * deltaTime;

    // Reset position when square goes below viewport
    if (newY > 110) {
      newY = -10;
      square.x = Math.random() * 100; // New random x position
    }

    return {
      ...square,
      y: newY,
      rotation: newRotation,
    };
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const deltaTime = timestamp - (startTimeRef.current || timestamp);
    startTimeRef.current = timestamp;

    setSquares(prevSquares =>
      prevSquares.map(square => updateSquarePosition(square, deltaTime))
    );

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    setSquares(generateSquares(2)); // Reduced number of squares for better performance
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-transparent">
        {squares.map((square) => (
          <div
            key={square.id}
            className="absolute transition-colors duration-300
                     bg-blue-400 dark:bg-white"
            style={{
              left: `${square.x}%`,
              top: `${square.y}%`,
              width: `${square.size}px`,
              height: `${square.size}px`,
              opacity: square.opacity,
              transform: `rotate(${square.rotation}deg) translateZ(0)`,
              transition: 'transform 0.1s linear',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FallingSquares;