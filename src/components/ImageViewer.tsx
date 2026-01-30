import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./imageViewer.css";

interface Props {
  open: boolean;
  images: any[];
  onClose: () => void;
}

const ImageViewer: React.FC<Props> = ({ open, images, onClose }) => {
  if (!open) return null;

  return (
    <div className="ig-overlay">
      <div className="ig-close" onClick={onClose}>
        ✕
      </div>

      <div className="ig-wrapper">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showBullets={false}
          showNav={true}
          showThumbnails={true}
          thumbnailPosition="bottom"
          lazyLoad
          useBrowserFullscreen={false}
          slideOnThumbnailOver={false}
          disableThumbnailScroll={false}
          enableSwipe={true}
          enableZoom={true}
        />
      </div>
    </div>
  );
};

export default ImageViewer;
