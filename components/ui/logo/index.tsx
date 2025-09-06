"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export function Logo({
  size = "md",
  showText = true,
  className = "",
  textClassName = "",
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const pixelSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div
        className={`${sizeClasses[size]} relative flex items-center justify-center overflow-hidden ${imageError ? "bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full" : ""}`}
      >
        {!imageError ? (
          <Image
            src="/logo.png"
            alt="Fondation Marie Mwape Logo"
            width={pixelSizes[size]}
            height={pixelSizes[size]}
            className="object-contain w-full h-full"
            onError={() => setImageError(true)}
            priority
            quality={90}
            sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          />
        ) : (
          <Heart className={`${iconSizes[size]} text-white`} />
        )}
      </div>
      {showText && (
        <div className={`hidden sm:block ${textClassName}`}>
          <div
            className={`font-serif font-bold text-slate-900 dark:text-white transition-colors duration-300 ${textSizes[size]}`}
          >
            Fondation Marie Mwape
          </div>
          <div className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
            pour le Progrès Social
          </div>
        </div>
      )}
    </div>
  );
}
