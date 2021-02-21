import Link from "next/link";
import React from "react";

interface ShowCardProps {
  id: string;
  showType: "SERIES" | "MOVIE";
  coverPicture: string;
  name: string;
  year: number;
}

const getShowPageURL = (showType: "SERIES" | "MOVIE", showId: string) =>
  showType === "MOVIE" ? `${showId}-${showType.toLowerCase()}` : `${showId}-${showType.toLowerCase()}-1-1`;

export const ShowCard = ({ id, coverPicture, name, year, showType }: ShowCardProps): JSX.Element => (
  <Link href={`/show/[slug]`} as={`show/${getShowPageURL(showType, id)}`} shallow>
    <a className="block">
      <div className="w-full h-full bg-zircon">
        <div className="w-full relative image">
          <img
            className="absolute w-full h-full rounded-lg object-cover"
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
      <style jsx>{`
        .image {
          padding-bottom: 150%;
        }
      `}</style>
    </a>
  </Link>
);
