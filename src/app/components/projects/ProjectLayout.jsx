import React from "react";
import Image from "next/image";

const ProjectLayout = ({ name, description, demoLink, imageUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm p-4 flex flex-col space-y-4 custom-bg">
      
          {/* ✅ Display image using next/image */}
          {imageUrl && (
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Name and Date */}
      <div className="flex justify-between items-center">
        <h2 className="text-base text-bold font-semibold  text-foreground">{name}</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-muted">{description}</p>

      {/* Demo Link */}
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm hover:underline"
        >
          Visit Webpage/Github →
        </a>
      )}
    </div>
  );
};

export default ProjectLayout;

