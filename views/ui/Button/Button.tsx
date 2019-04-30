import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./StyledButton";

interface IProps {
  loading: boolean;
  children: string;
}

const Button: IProps = ({ loading, children, ...props }) => (
  <StyledButton {...props}>
    {children}
    {loading && <i className="fa fa-spinner fa-spin" />}
  </StyledButton>
);

Button.defaultProps = {
  loading: false
};

export default Button;
