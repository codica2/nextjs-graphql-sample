import React from "react";

import Layout from "layouts/Main";
import { HelloComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout title="Hello page">
      <HelloComponent>
        {({ data }) => {
          return <div>{(data && data.hello) || "loading..."}</div>;
        }}
      </HelloComponent>
    </Layout>
  );
};
