import React from "react";
import Error, { DefaultErrorIProps } from "next/error";
import { NextContext } from "next";

import Flex from "styled/Flex";

class MyError extends React.Component<DefaultErrorIProps> {
  static getInitialProps({ res, err }: NextContext) {
    const statusCode =
      (res && res.statusCode) || (err && err.statusCode) || null;

    return { statusCode };
  }

  render() {
    return (
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Error statusCode={this.props.statusCode} />
      </Flex>
    );
  }
}

export default MyError;
