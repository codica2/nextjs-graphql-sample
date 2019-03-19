import React from "react";
import Link from "next/link";
import { Button } from "antd";

import Layout from "../views/layouts";

import { LoginComponent } from "../generated/apolloComponents";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <LoginComponent>
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
      </LoginComponent>
    </Layout>
  );
};

export default IndexPage;
