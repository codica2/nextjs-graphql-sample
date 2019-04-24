import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import cx from "classnames";
import { FieldProps } from "formik";

import StyledInput from "./StyledInput";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps & InputProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  const className = cx({ error: errorMessage });

  return (
    <StyledInput>
      <input {...field} {...props} className={className} />

      <span className="focus-bg" />

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </StyledInput>
  );
};

export default InputField;
