import React from "react";
import { HelloComponent } from "../generated/apolloComponents";
import MainLayout from "../views/layouts";

export default () => {
  return (
    <MainLayout title="Hello page">
      <HelloComponent>
        {({ data }) => {
          console.log("data :", data);

          return <div>{(data && data.hello) || "loading..."}</div>;
        }}
      </HelloComponent>
    </MainLayout>
  );
};
