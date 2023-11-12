import { forwardRef } from "react";
import { ITextFieldProps } from "./TextField.types";

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  (props, ref) => {
    return (
      <div>
        <div className="mb-1">
          <label className="text-marine-blue text-sm" htmlFor={props.id}>
            {props.label}
          </label>
          {props.errMessage && (
            <div className="text-red-500">{props.errMessage}</div>
          )}
        </div>
        <input
          className={`min-w-full text-marine-blue border-[1px] px-2 outline-1 rounded-lg border-gray-400 min-h-[40px] focus:outline-purplish-blue focus:outline ${
            props.errMessage ? "border-red-500" : ""
          } ${props.className}`}
          {...props}
          ref={ref}
          id={props.id}
        />
      </div>
    );
  }
);
