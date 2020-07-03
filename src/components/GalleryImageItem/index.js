import React from "react";
import PropTypes from "prop-types";

function GalleryImageitem(props) {
  const { farm, server, id, secret, title } = props;
  return (
    <img
      src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
      alt={`${title}`}
    />
  );
}

GalleryImageitem.propTypes = {
  farm: PropTypes.number.isRequired,
  server: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GalleryImageitem;
