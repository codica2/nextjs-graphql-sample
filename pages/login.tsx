import React from "react";
import Router from "next/router";
import { Formik, Field, FormikProps } from "formik";
import Button from "antd/lib/button";

import Layout from "../views/layouts";
import { InputField } from "../views/ui/inputs/InputField";
import { LoginComponent, MeQuery } from "../generated/apolloComponents";
import { meQuery } from "../graphql/user/queries/me";

interface LoginFormValues {
  email: string;
  password: string;
}

const Register: React.FunctionComponent = () => {
  return (
    <Layout title="Login page">
      <LoginComponent>
        {login => (
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            onSubmit={async (data: LoginFormValues, { setErrors }) => {
              const response = await login({
                variables: data,
                update: (cache, { data }) => {
                  if (!data || !data.login) {
                    return;
                  }

                  cache.writeQuery<MeQuery>({
                    query: meQuery,
                    data: {
                      me: data.login
                    }
                  });
                }
              });

              if (response && response.data && !response.data.login) {
                setErrors({
                  email: "Invalid login"
                });

                return;
              }

              Router.push("/");
            }}
          >
            {({ handleSubmit }: FormikProps<LoginFormValues>) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="email"
                    placeholder="Email"
                    component={InputField}
                  />

                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    component={InputField}
                  />

                  <Button htmlType="submit">Submit</Button>
                </form>
              );
            }}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default Register;
