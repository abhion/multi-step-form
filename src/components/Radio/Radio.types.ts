import { ComponentPropsWithRef, ReactNode } from "react";

export type IRadioProps<T> = ComponentPropsWithRef<"input"> & {
  items: { value: T; labelContent: ReactNode }[];
  direction: "flex-row" | "flex-col";
};
