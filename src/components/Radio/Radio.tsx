import * as RadioGroup from "@radix-ui/react-radio-group";
import { IRadioProps } from "./Radio.types";
import { useState } from "react";

export const Radio = <T extends string>(props: IRadioProps<T>) => {
  const [value, setValue] = useState<T>(props.items[0].value);

  return (
    <RadioGroup.Root
      className={`flex ${props.direction} gap-4`}
      value={value}
      onValueChange={(val: T) => setValue(val)}
    >
      {props.items.map((item) => {
        return (
          <RadioGroup.Item
            id={item.value}
            key={item.value}
            value={item.value}
            className="border-gray-400 outline-1 p-6 rounded-md transition-all duration-300
             data-[state='checked']:bg-purplish-blue/5 data-[state='checked']:outline data-[state='checked']:outline-purplish-blue"
          >
            {item.labelContent}
          </RadioGroup.Item>
        );
      })}
    </RadioGroup.Root>
  );
};
