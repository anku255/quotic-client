import React, { HTMLProps, ChangeEvent } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends HTMLProps<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: FieldError;
}

const Input = React.forwardRef((props: InputProps, ref) => {
  return (
    <div className="w-full">
      <label htmlFor={props.name} className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      <input
        className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        ref={ref as any}
        {...props}
      />
      <p className="pt-2 text-xs text-red-400">
        {props.error?.type === "required" ? "This field is required" : props.error?.message}
      </p>
    </div>
  );
});

export default Input;
