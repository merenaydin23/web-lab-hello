import { ReactNode } from "react";

interface CardProps {
  title?: string;
  image?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, image, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}>
      {image && (
        <div className="h-48 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
          <img src={image} alt={title || "Card image"} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-5">
        {title && <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
