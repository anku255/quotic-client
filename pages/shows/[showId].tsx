import React from "react";
import { withApollo } from "@/lib/withApollo";
import ShowDetailPage from "@/modules/show";
import { HeaderWithBackButton } from "@/components/HeaderWithBackButton";

const ShowPage = () => {
  return <ShowDetailPage />;
};

// Header is needed for ShowPageA variant
ShowPage.Header = HeaderWithBackButton;

// ShowPage.Header = () => null;
ShowPage.title = "Show";

export default withApollo()(ShowPage);
