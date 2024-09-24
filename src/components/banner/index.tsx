import React from "react";
import "./Banner.css";
interface BannerProps {
  message: string;
  visible: boolean;
  backgroundColor?: string; //Optional prop
}

const Banner: React.FC<BannerProps> = ({
  message,
  visible,
  backgroundColor = "gray",
}) => {
  if (!visible) return null;

  return (
    <div className="banner" style={{ backgroundColor }}>
      <span>{message}</span>
    </div>
  );
};

export default Banner;
