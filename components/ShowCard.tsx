import React from "react";

interface ShowCardProps {
  imageUrl: string;
  name: string;
  year: number;
}

export const ShowCard = ({ imageUrl, name, year }: ShowCardProps): JSX.Element => (
  <div className="w-full bg-zircon">
    <div className="w-full h-64">
      <img
        className="w-full h-full rounded-lg object-cover"
        src={imageUrl}
        alt={name}
        style={{ boxShadow: "0px 30px 40px -25px rgba(0, 0, 0, 0.75)" }}
      />
    </div>
    <div className="h-1"></div>
    <div className="p-4 text-blackRussian">
      <div className="">{name}</div>
      <div className="text-xs text-baliHai">{year}</div>
    </div>
  </div>
);
