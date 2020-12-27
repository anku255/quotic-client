import Link from "next/link";
import React from "react";

interface ShowCardProps {
  id: string;
  coverPicture: string;
  name: string;
  year: number;
}

export const ShowCard = ({ id, coverPicture, name, year }: ShowCardProps): JSX.Element => (
  <Link href={`/show/[showId]`} as={`/show/${id}`} shallow>
    <a className="block">
      <div className="w-full h-full bg-zircon">
        <div className="w-full h-64">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={coverPicture}
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
    </a>
  </Link>
);
