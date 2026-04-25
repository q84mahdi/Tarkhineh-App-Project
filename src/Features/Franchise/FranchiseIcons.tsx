const ITEMS = [
  {
    label: "بیش از 20 شعبه فعال در سراسر کشور",
    icon: "Images/sign-1.svg",
  },
  {
    label: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
    icon: "Images/sign-2.svg",
  },
  {
    label: "طرح‌های تشویقی ارتقای فروش",
    icon: "Images/sign-3.svg",
  },
  {
    label: "اعطای دستورالعمل پخت غذاها",
    icon: "Images/sign-4.svg",
  },
];

function FranchiseIcons() {
  return (
    <div className="flex items-center justify-center gap-20 border-b border-gray-400 p-12">
      {ITEMS.map((item, index) => (
        <div
          key={index}
          className="flex max-w-44 flex-col items-center justify-center gap-4"
        >
          <img src={item.icon} alt="franchise-icon" />

          <span className="text-center text-gray-800">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
export default FranchiseIcons;
