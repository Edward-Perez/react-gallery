import React from "react";
import PropTypes from "prop-types";

import { GalleryImageItem } from "components";

function ImageGallery({ imageDataObject }) {
  function BuildGalleryImages() {
    return imageDataObject.map((img) => (
      <figure key={img.id}>
        <GalleryImageItem
          farm={img.farm}
          server={img.server}
          secret={img.secret}
          title={img.title}
          id={img.id}
        />
      </figure>
    ));
  }

  return (
    <section className="image-gallery">
      <BuildGalleryImages />
    </section>
  );
}
ImageGallery.propsTypes = {
  imageDataObject: PropTypes.object.isRequired,
};

export default ImageGallery;
