import React, { useState, useRef, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import './Wheel.css';

interface WheelProps {
  userId: string;
}

const Wheel: React.FC<WheelProps> = ({ userId }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const supabase = useSupabaseClient();

  const colors = ['red', 'blue', 'green', 'yellow'];
  const colorMap = {
    red: '#FF0000',
    blue: '#0000FF',
    green: '#00FF00',
    yellow: '#FFFF00',
  };

  const spinWheel = async () => {
    setIsSpinning(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('spin-wheel', {
        body: { userId },
      });

      if (error) throw error;
      
      const { color } = data as { color: string };
      
      // Simulate wheel spinning animation
      const rotations = Math.floor(Math.random() * 10) + 5; // 5-15 rotations
      const rotation = rotations * 360 + (colors.indexOf(color) * (360 / colors.length));
      
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      
      setTimeout(() => {
        setIsSpinning(false);
        setResult(color);
      }, 3000); // Animation duration
    } catch (error) {
      console.error('Error spinning wheel:', error);
      setIsSpinning(false);
    }
  };

  useEffect(() => {
    if (wheelRef.current) {
      wheelRef.current.style.transform = 'rotate(0deg)';
    }
  }, []);

  return (
    <div className="wheel-container">
      <div className="wheel" ref={wheelRef}>
        {colors.map((color, index) => (
          <div
            key={color}
            className="wheel-section"
            style={{
              transform: `rotate(${(index * 360) / colors.length}deg) translateX(50%)`,
              backgroundColor: colorMap[color],
            }}
          />
        ))}
      </div>
      <div className="wheel-pointer" />
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="spin-button"
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      {result && (
        <div className="result-container">
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default Wheel;
