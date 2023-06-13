import { useFormikContext } from 'formik';
import React from 'react';

const Input = ({
  className = '',
  labelClass = '',
  inputClass = '',
  type = 'text',
  name,
  id,
  placeholder,
  label,
}) => {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext() || {};
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={name || id}
          className={`text-[16px] text-gray-700 font-medium mb-[5px] cursor-pointer ${labelClass}`}
        >
          {label}
        </label>
      )}
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        className={`border-[1px] border-slate-800 outline-none h-[40px] px-[5px] ${inputClass}`}
      />
      {errors[name] && touched[name] && (
        <p className="text-red-500 text-[12px] mt-[5px]">{errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
