import { NextContext } from "next";
import Error, { DefaultErrorIProps } from "next/error";
import React from "react";

class MyError extends React.Component<DefaultErrorIProps> {
  public static getInitialProps({ res, err }: NextContext) {
    const statusCode =
      (res && res.statusCode) || (err && err.statusCode) || null;

    return { statusCode };
  }

  public render() {
    return <Error statusCode={this.props.statusCode} />;
  }
}

export default MyError;
