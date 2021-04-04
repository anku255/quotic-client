import React from "react";
import { Image as CloudinaryImage } from "cloudinary-react";

export const getCloudinaryPublicId = (url = "") => url && url.split("upload")[1].split("/").slice(2).join("/");

export const Image = ({
  url,
  width,
  height,
  crop,
  className,
  alt,
  style,
}: {
  url?: string;
  width?: string;
  height?: string;
  crop?: string;
  className?: string;
  alt?: string;
  style?: any;
}) => (
  <CloudinaryImage
    cloudName="anku"
    publicId={getCloudinaryPublicId(url)}
    width={width}
    height={height}
    crop={crop}
    className={className}
    alt={alt}
    style={style}
  />
);
