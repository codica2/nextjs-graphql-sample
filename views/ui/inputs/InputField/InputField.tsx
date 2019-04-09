import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { FieldProps } from "formik";

import { Input } from "antd";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const StyledInput = styled("div")`
  position: relative;
  margin: 10px 0;
  padding-bottom: 15px;

  & > .error-message {
    position: absolute;
    bottom: 0;
    color: red;
  }
`;

const InputField = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps & InputProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <StyledInput>
      <Input {...field} {...props} />

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </StyledInput>
  );
};

export default InputField;
