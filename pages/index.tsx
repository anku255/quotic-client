import React from "react";

import { Layout } from "@/components/Layout";
import { HomePage } from "@/modules/homepage";

const IndexPage: React.FunctionComponent = () => (
  <Layout title="Home | Quotic">
    <HomePage />
  </Layout>
);

export default IndexPage;
