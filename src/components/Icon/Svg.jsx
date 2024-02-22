export const Svg = ({ children, className, size }) => {
  return (
    <svg
      fill="none"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "76"}
      height={size ? size : "22"}
      viewBox="0 0 76 22"
    >
      {children}
    </svg>
  );
};
