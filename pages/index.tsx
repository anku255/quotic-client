import React from "react";

import { HomePage } from "@/modules/homepage";

const IndexPage: React.FunctionComponent = () => <HomePage />;

// @ts-expect-error
IndexPage.title = "Home";

export default IndexPage;
