import type { IconPropsType } from "../Types/globalTypes";

function ArrowLeftIcon({ size = 24, className }: IconPropsType) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.5 13.78C10.3734 13.78 10.2467 13.7333 10.1467 13.6333L5.80002 9.28668C5.09335 8.58001 5.09335 7.42001 5.80002 6.71335L10.1467 2.36668C10.34 2.17335 10.66 2.17335 10.8534 2.36668C11.0467 2.56001 11.0467 2.88001 10.8534 3.07335L6.50669 7.42001C6.18669 7.74001 6.18669 8.26001 6.50669 8.58001L10.8534 12.9267C11.0467 13.12 11.0467 13.44 10.8534 13.6333C10.7534 13.7267 10.6267 13.78 10.5 13.78Z" />
    </svg>
  );
}
export default ArrowLeftIcon;
