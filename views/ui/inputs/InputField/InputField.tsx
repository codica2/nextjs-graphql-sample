import { FieldProps } from "formik";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";

import { Input } from "antd";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const StyledInput = styled("div")`
  position: relative;
  padding-bottom: 15px;
  margin: 10px 0;

  input {
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
    outline: none;

    &:focus > .focus-border {
      &:before,
      &:after {
        width: 100%;
        transition: 0.3s;
      }

      & > i {
        &:after,
        &:before {
          height: 100%;
          transition: 0.4s;
        }
      }
    }
  }

  &.focus-border {
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: 0.3s;
    }

    &:after {
      top: auto;
      bottom: 0;
      left: auto;
      right: 0;
    }

    & > i {
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 0;
        background-color: #3399ff;
        transition: 0.4s;
      }

      &:after {
        left: auto;
        right: 0;
        top: auto;
        bottom: 0;
      }
    }
  }

  &:hover {
    border-color: #0c2f4d;
  }

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
      <input {...field} {...props} />

      <span className="focus-border">
        <i />
      </span>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </StyledInput>
  );
};

export default InputField;
