import RectangleIcon from "../../Icons/RectangleIcon";

const ITEMS = [
  [
    "استفاده از برند شناخته شده ترخینه",
    "به حداقل رساندن ریسک سرمایه گذاری",
    "تسریع روند بازگشت سرمایه",
    "مشاوره های تخصصی جهت مدیریت رستوران",
  ],
  [
    "مشاوره در امور حقوقی، مالی و مالیاتی",
    "پشتیبانی بازاریابی و منابع انسانی",
    "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
    "طرح های تشویقی برای ارتقا فروش",
  ],
];

function FranchisePoints() {
  return (
    <div className="flex flex-col items-center justify-center border-b border-gray-400 p-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        مزیت دریافت نمایندگی
      </h2>

      <div className="flex items-start justify-center gap-12">
        {ITEMS.map((item, index1) => (
          <ul
            key={index1}
            className="flex flex-col items-start justify-center gap-4"
          >
            {item.map((label, index2) => (
              <li
                key={index2}
                className="flex items-center gap-1 text-lg text-gray-800"
              >
                <RectangleIcon />

                <span>{label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
export default FranchisePoints;
