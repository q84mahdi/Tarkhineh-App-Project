import type { IconPropsType } from "../Types/globalTypes";

function CloseIcon({ size = 24, className }: IconPropsType) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="3.72611"
        height="29.8089"
        rx="1.86305"
        transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45459 11.667)"
      />
      <rect
        width="3.72611"
        height="29.8089"
        rx="1.86305"
        transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6968 9.00049)"
      />
    </svg>
  );
}
export default CloseIcon;
