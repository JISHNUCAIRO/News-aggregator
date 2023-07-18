import React, { useState, useEffect } from 'react';
import './cur.css';

const MouseCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-cursor" style={{ left: position.x, top: position.y }}></div>
  );
};

export default MouseCursor;
