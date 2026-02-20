// components/Avatar.jsx
import React from "react";
import Image from "next/image";

export default function Avatar({ src, alt = "avatar", size = "lg", initials, status }) {
  // Size mapping
  const sizes = {
    sm: 32,   // pixels
    md: 48,
    lg: 64,
  };

  const tailwindSizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className="relative inline-block">
      {src ? (
        <div className={`rounded-full overflow-hidden ${tailwindSizes[size]}`}>
          <Image
            src={src}
            alt={alt}
            width={sizes[size]}
            height={sizes[size]}
            className="object-cover h-full"
          />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center rounded-full bg-gray-300 text-white font-bold ${tailwindSizes[size]}`}
        >
          {initials}
        </div>
      )}

      {/* Optional Status Indicator */}
      {status && (
        <span
          className={`absolute bottom-0 right-0 block rounded-full w-3 h-3 border-2 border-white ${status === "online" ? "bg-green-500" : "bg-gray-400"
            }`}
        ></span>
      )}
    </div>
  );
}