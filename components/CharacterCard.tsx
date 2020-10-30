import React from "react";

interface CharacterCardProps {
  imageUrl: string;
  realName: string;
  characterName: string;
  showName: string;
  showYear: number;
}

export const CharacterCard = ({
  imageUrl,
  realName,
  characterName,
  showName,
  showYear,
}: CharacterCardProps): JSX.Element => (
  <div className="w-full shadow-primary rounded-xl border border-aliceBlue bg-white">
    <div className="w-full h-32">
      <img className="w-full h-full rounded-t-xl object-cover" src={imageUrl} alt={characterName} />
    </div>
    <div className="p-4 text-blackRussian">
      <div className="font-semibold">{characterName}</div>
      <div className="font-serif">{realName}</div>
      <div className="h-1"></div>
      <div className="">{showName}</div>
      <div className="text-xs text-baliHai">{showYear}</div>
    </div>
  </div>
);
