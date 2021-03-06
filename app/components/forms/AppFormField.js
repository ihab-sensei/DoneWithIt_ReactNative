import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const {
    handleChange,
    setFieldTouched,
    errors,
    touched,
    handleBlur,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
