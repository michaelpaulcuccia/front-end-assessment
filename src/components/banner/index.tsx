import React from "react";
import "./banner.css";
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
      <span>
        <h3 style={{ color: "white", fontSize: "28px" }}>{message}</h3>
      </span>
    </div>
  );
};

export default Banner;
