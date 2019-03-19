import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldProps } from "formik";

import { Input } from "antd";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps & InputProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <div>
      <Input {...field} {...props} />

      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};
