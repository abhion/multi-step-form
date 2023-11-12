export type ITextFieldProps = React.ComponentPropsWithRef<"input"> & {
  errMessage?: string;
  label: string;
  id: string;
};
