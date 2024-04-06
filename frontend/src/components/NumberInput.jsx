import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const NumberInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id} className="block">
        <span className="text-gray-700">{label}</span>
        <input
          type="Number"
          className="mt-1 px-4 py-1 sm:py-2 outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...field}
          {...props}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="text-error italic mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

NumberInput.propTypes = {};

export default NumberInput;
