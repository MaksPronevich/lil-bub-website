export const sizes = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

export const colors = {
  white: "fill-white",
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  className?: string;
};
