import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { CheckIcon } from "../../assets/icons/CheckIcon";
import { ICheckboxProps } from "./Checkbox.types";
import { useState } from "react";

export const Checkbox = (props: ICheckboxProps) => {
  const [checked, setChecked] = useState<CheckboxRadix.CheckedState>(false);
  return (
    <div
      className={`flex items-center border-[1px] border-gray-400 outline-1 px-6 py-10 rounded-md
    hover:outline hover: outline-purplish-blue focus:outline focus:outline-purplish-blue
    h-6 gap-7 ${
      checked ? "bg-purplish-blue/5 outline outline-purplish-blue" : ""
    }
    `}
    >
      <CheckboxRadix.Root
        id={props.id}
        className="w-6 h-6 flex items-center justify-center border-2 data-[state='checked']:bg-purplish-blue transition duration-300
            rounded-md
        "
        checked={checked}
        onCheckedChange={setChecked}
      >
        <CheckboxRadix.Indicator className="flex items-center justify-center">
          <CheckIcon width="15" height="15"></CheckIcon>
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {props.labelContent}
    </div>
  );
};
