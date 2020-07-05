import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";

import MainSection from "containers/MainSection";
import { DisplayNotFound } from "components/utilities";

function RouteController({ children, userSearchInput }) {
  function LoadGallery() {
    const { slug } = useParams();
    return <MainSection userSearchInput={slug} />;
  }

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path="/image/search/:slug" component={LoadGallery} />
        <Route exact path="/image/trending/:slug" component={LoadGallery} />
        <Route exact path="/">
          <MainSection userSearchInput={userSearchInput} />
        </Route>
        <Route component={DisplayNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

RouteController.propsTypes = {
  userSearchInput: PropTypes.string.isRequired,
};

export default RouteController;
