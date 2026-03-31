import { useState } from "react";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";

interface AccordionItem {
  mobile_title: string;
  desktop_title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

function Accordion({ items }: AccordionProps) {
  return (
    <div className="mb-6 mt-3 rounded border border-gray-400 lg:mb-12 lg:mt-6 lg:rounded-lg">
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}
export default Accordion;

interface AccordionItemProps {
  item: AccordionItem;
}

function AccordionItem({ item }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((is) => !is)}
      className="cursor-pointer border-b border-b-gray-400 last:border-b-0"
    >
      <div className="px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <span
            className={`block text-sm font-medium text-gray-800 transition-all duration-200 lg:hidden lg:text-lg ${isOpen && "text-primary"}`}
          >
            {item.mobile_title}
          </span>

          <span
            className={`hidden text-sm font-medium text-gray-800 transition-all duration-200 lg:block lg:text-lg ${isOpen && "text-primary"}`}
          >
            {item.desktop_title}
          </span>

          <ArrowLeftIcon
            className={`h-4 w-4 -rotate-90 fill-gray-800 transition-all duration-200 lg:h-8 lg:w-8 ${isOpen && "!rotate-90 fill-primary"}`}
          />
        </div>

        <p
          className={`${isOpen ? "block" : "hidden"} mt-2 whitespace-pre-line px-3 text-xs leading-loose text-gray-700 transition-all duration-200 lg:mt-5 lg:text-base`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
