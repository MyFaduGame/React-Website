import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageViewerProps {
  open: boolean;
  images: any[];
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ open, images, onClose }) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(10px)",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          autoPlay={false}
          slideInterval={2000}
        />
      </div>
    </div>
  );
};

export default ImageViewer;
