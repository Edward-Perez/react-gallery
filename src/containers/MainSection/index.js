import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import flickrApi from "api/flickrApi";
import ImageGallery from "containers/ImageGallery";
import {
  DisplayLoading,
  DisplayErrorMessage,
  DisplayNoResults,
} from "components/utilities";

function MainSection({ userSearchInput }) {
  const [galleryData, setGalleryData] = useState({
    didLoad: false,
    hasErrors: false,
    flickrData: null,
  });

  useEffect(() => {
    flickrApi(userSearchInput)
      .then((response) =>
        setGalleryData({
          didLoad: true,
          hasErrors: false,
          flickrData: response,
        })
      )
      .catch(() =>
        setGalleryData({
          hasErrors: "Flickr is taken longer than expected",
        })
      );
  }, [userSearchInput]);

  function ComponentToLoad() {
    const { flickrData, didLoad, hasErrors } = galleryData;
    if (hasErrors || flickrData === undefined) {
      return <DisplayErrorMessage message={hasErrors} />;
    }
    if (!didLoad) {
      return <DisplayLoading />;
    }
    if (flickrData.length > 0) {
      return <ImageGallery imageDataObject={flickrData} />;
    }
    return <DisplayNoResults />;
  }

  return <ComponentToLoad />;
}

MainSection.propsTypes = {
  userSearchInput: PropTypes.string.isRequired,
};

export default MainSection;
