import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hoverable = false,
  onClick,
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        hoverable ? 'hover:shadow-lg cursor-pointer' : ''
      } transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
