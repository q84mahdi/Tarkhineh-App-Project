const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toEnglishNumbersWithoutComma(n: string | number) {
  let str = n.toString();

  str = str.replace(/٬/g, "");

  str = str.replace(/[۰-۹]/g, (x) => englishDigits[persianDigits.indexOf(x)]);

  return str;
}
