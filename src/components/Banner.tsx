import React from "react";
import { cardData } from "../cardData.ts";

interface BannerProps {
  onImageClick: (images: string[]) => void;
}

const Banner: React.FC<BannerProps> = ({ onImageClick }) => (
  <>
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        marginTop: 12,
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "scroll 18s linear infinite",
        }}
      >
        {cardData.map((p) => (
          <img
            key={p.id}
            src={p.images[0]}
            onClick={() => onImageClick(p.images)}
            style={{
              height: 70,
              width: 70,
              objectFit: "cover",
              borderRadius: "50%",
              margin: "0 20px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>
    </div>

    <style>
      {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>
  </>
);

export default Banner;
