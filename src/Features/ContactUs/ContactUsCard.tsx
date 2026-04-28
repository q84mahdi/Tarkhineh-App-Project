import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal";
import CloseIcon from "../../Icons/CloseIcon";
import GalleryIcon from "../../Icons/GalleryIcon";
import type { Branch } from "../../Types/BranchTypes";

interface ContactUsCardProps {
  branch: Branch;
}

function ContactUsCard({ branch }: ContactUsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="group relative flex w-full flex-col items-center justify-stretch rounded border border-gray-400 lg:flex-row lg:hover:shadow-md">
      <div className="relative h-[112px] w-full shrink-0 overflow-hidden rounded-t md:h-[182px] lg:h-[280px] lg:w-[400px] lg:rounded-r lg:rounded-tl-none xl:w-[600px]">
        <img
          src={branch.image}
          alt={branch.name}
          className="h-full w-full object-cover transition-all duration-300 lg:group-hover:brightness-50"
        />

        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 ease-in-out lg:block lg:group-hover:opacity-100"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500/40">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/50">
              <GalleryIcon className="h-8 w-8 fill-white" />
            </div>
          </div>
        </button>
      </div>

      <div className="flex w-full flex-col items-center justify-center p-4 pt-2 text-center">
        <h3 className="mb-1 text-sm text-gray-800 lg:mb-5 lg:text-xl lg:font-semibold">
          {branch.title}
        </h3>

        <div className="mb-3 text-xs leading-[1.8] text-gray-700 lg:mb-5 lg:space-y-2 lg:text-lg">
          <div>
            <span>آدرس: </span>
            <span>{branch.location}</span>
          </div>

          <div>
            <span>شماره تماس: </span>
            <span dir="ltr">{branch.phone_numberes.mobile}</span>
          </div>

          <div>
            <span>ساعت کاری: </span>
            <span>{branch.work_time}</span>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-4 transition-all duration-300 lg:justify-center lg:gap-5 lg:opacity-0 lg:group-hover:opacity-100">
          <button
            onClick={() => navigate(`/branch/${branch.name}`)}
            className="primary-button w-full text-xs lg:w-auto lg:text-base"
          >
            صفحه شعبه
          </button>

          <button
            onClick={() => toast.error("این بخش بزودی توسعه داده میشود.")}
            className="outline-primary-button w-full lg:w-auto lg:px-6"
          >
            دیدن در نقشه
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img
          className="aspect-[6/7] w-[80vw] max-w-[300px] rounded-lg object-cover md:aspect-[8/5] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[750px]"
          src={branch.image}
          alt={branch.name}
        />

        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute left-3 top-3 text-white"
        >
          <CloseIcon className="h-6 w-6 fill-white stroke-white xl:h-8 xl:w-8" />
        </button>
      </Modal>
    </div>
  );
}
export default ContactUsCard;
