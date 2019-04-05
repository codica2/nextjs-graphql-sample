import React from "react";

import Layout from "layouts/Intro";
import Title from "styled/Title";

import { withAuth } from "../lib/withAuth";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Title>This is main Page.</Title>
    </Layout>
  );
};

{
  /* <LoginComponent>
        {mutate => (
          <Button
            onClick={async () => {
              const response = await mutate({
                variables: { email: "test@test.com", password: "123" }
              });
            }}
          >
            Login mutation
          </Button>
        )}
      </LoginComponent> */
}

export default withAuth(IndexPage);
