import { NextContext } from "next";
import Error, { DefaultErrorIProps } from "next/error";
import React from "react";

import Flex from "@views/styled/Flex";

class MyError extends React.Component<DefaultErrorIProps> {
  public static getInitialProps({ res, err }: NextContext) {
    const statusCode =
      (res && res.statusCode) || (err && err.statusCode) || null;

    return { statusCode };
  }

  public render() {
    return (
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Error statusCode={this.props.statusCode} />
      </Flex>
    );
  }
}

export default MyError;
