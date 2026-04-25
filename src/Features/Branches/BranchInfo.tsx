import ClockIcon from "../../Icons/ClockIcon";
import LocationIcon from "../../Icons/LocationIcon";
import PhoneIcon from "../../Icons/PhoneIcon";

interface BranchInfoProps {
  title: string;
  image: string;
  phone_numberes: {
    mobile: string;
    desktop_1: string;
    desktop_2: string;
  };
  location: string;
  work_time: string;
}

function BranchInfo({
  title,
  image,
  phone_numberes,
  location,
  work_time,
}: BranchInfoProps) {
  return (
    <div className="relative mb-12 flex flex-col items-center justify-center md:mb-16 lg:mb-24">
      {/* Branch Title */}
      <h2 className="mb-3 font-bold md:mb-4 md:text-lg lg:mb-5 lg:text-2xl">
        {title}
      </h2>

      {/* Branch Image */}
      <img
        className="h-[176px] w-full object-cover object-center brightness-90 md:h-[276] lg:h-[376px]"
        src={image}
        alt="ekbatan-branch-image"
      />

      {/* Branch Info */}
      <div className="absolute -bottom-10 grid grid-cols-2 gap-2 rounded border border-primary bg-white p-2 text-gray-800 md:px-4 lg:-bottom-20 lg:grid-cols-3 lg:gap-8 lg:rounded-lg lg:border-2 lg:px-12 lg:py-4">
        <div className="flex items-center gap-1 text-center text-xs leading-[1.8] md:text-sm lg:w-[210px] lg:flex-col lg:gap-2 lg:text-base">
          <PhoneIcon className="h-4 w-4 fill-gray-800 md:h-6 md:w-6 lg:h-8 lg:w-8" />

          <div>
            <span className="hidden lg:block">{phone_numberes.desktop_1}</span>
            <span className="hidden lg:block">{phone_numberes.desktop_2}</span>
            <span className="lg:hidden">{phone_numberes.mobile}</span>
          </div>
        </div>

        <div className="col-span-2 col-start-1 row-start-1 flex items-center gap-1 text-center text-xs leading-[1.8] md:text-sm lg:col-span-1 lg:col-start-2 lg:w-[210px] lg:flex-col lg:gap-2 lg:text-base">
          <LocationIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />

          <span>{location}</span>
        </div>

        <div className="flex items-center gap-1 text-center text-xs leading-[1.8] md:text-sm lg:w-[210px] lg:flex-col lg:gap-2 lg:text-base">
          <ClockIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />

          <span>{work_time}</span>
        </div>
      </div>
    </div>
  );
}
export default BranchInfo;
