import React from 'react';
import PropTypes from 'prop-types';

// Builds each src url with prop values, (prop values required by Flickr)
const ListImage = props => {
  const {farm, server, id, secret, title} = props;
  return (
    <li>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${title}`} />
    </li>
  )
}

ListImage.propTypes = {
  farm: PropTypes.number.isRequired,
  server: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ListImage;