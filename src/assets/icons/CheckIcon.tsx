type ICheckIconProps = {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
};

export const CheckIcon = (props: ICheckIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? "12"}
      height={props.height ?? "9"}
      viewBox="0 0 12 9"
    >
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "#FFF"}
        strokeWidth="2"
        d="m1 4 3.433 3.433L10.866 1"
      />
    </svg>
  );
};
