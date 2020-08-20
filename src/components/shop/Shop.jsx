import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../collection_overview/CollectionOverview";
import CollectionPage from "../collection_page/CollectionPage";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default Shop;
