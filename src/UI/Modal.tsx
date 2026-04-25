import type { ReactNode } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";
import CloseIcon from "../Icons/CloseIcon";

interface ModalProps {
  title?: string;
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
}

function Modal({ title, onClose, isOpen, children }: ModalProps) {
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={
        isOpen
          ? "fixed left-0 top-0 z-50 h-screen w-full bg-gray-800/60 backdrop-blur-sm"
          : ""
      }
    >
      <div
        ref={ref}
        className={`${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg transition-opacity duration-200 ease-in-out`}
      >
        <div
          className={`${title ? "flex" : "hidden"} flex items-center justify-center rounded-t-lg bg-gray-300 p-6`}
        >
          <h3 className="font-semibold text-gray-800">{title}</h3>

          <button onClick={onClose} className="absolute left-6">
            <CloseIcon className="icon fill-gray-600" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
export default Modal;
