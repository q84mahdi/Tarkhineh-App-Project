import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextFieldInput from "../../UI/TextFieldInput";

interface FranchiseFormValues {
  name: string;
  code: string;
  phone: string;
  province: string;
  city: string;
  area: string;
  ownershipType: string;
  areaSize: string;
  buildingAge: string;
  hasLicense: boolean;
  hasKitchen: boolean;
  hasParking: boolean;
  hasStorage: boolean;
}

function FranchiseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FranchiseFormValues>();

  const onSubmit = (data: FranchiseFormValues) => {
    console.log(data);
    reset();
    toast.success("اطلاعات با موفقیت ثبت شد");
  };

  return (
    <div className="p-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-12 rounded-lg border border-gray-400 px-6 py-8"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          فرم درخواست نمایندگی
        </h2>

        <div className="w-full">
          <h3 className="mb-8 text-lg text-gray-800">مشخصات فردی متقاضی</h3>

          <div className="flex w-full items-stretch justify-between gap-6 [&>div>input]:!text-gray-800 [&>div>label]:!w-1/3">
            <TextFieldInput
              label="نام و نام خانوادگی"
              name="name"
              id="name"
              register={register}
              validationSchema={{
                required: "لطفا نام و نام خانوادگی خود را وارد کنید",
                minLength: {
                  value: 5,
                  message: "نام باید بیشتر از ۵ کارکتر باشد",
                },
              }}
              errors={errors}
            />

            <TextFieldInput
              label="کدملی"
              name="code"
              id="code"
              register={register}
              validationSchema={{
                required: "لطفا کد ملی خود را وارد کنید",
                pattern: {
                  value: /^\d{10}$/,
                  message: "کد ملی باید شامل ۱۰ رقم عددی باشد",
                },
              }}
              errors={errors}
            />

            <TextFieldInput
              label="شماره تماس"
              name="phone"
              id="phone"
              register={register}
              validationSchema={{
                required: "لطفا شماره تماس خود را وارد کنید",
                pattern: {
                  value: /^09\d{9}$/,
                  message:
                    "شماره تماس باید معتبر و با 09 شروع شود (مثال: 09123456789)",
                },
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-8 text-lg text-gray-800">آدرس ملک متقاضی</h3>

          <div className="flex w-full items-stretch justify-between gap-6 [&>div>input]:!text-gray-800 [&>div>label]:!w-1/3">
            <TextFieldInput
              label="استان"
              name="province"
              id="province"
              register={register}
              validationSchema={{
                required: "لطفا نام استان را وارد کنید",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: "نام استان باید فقط شامل حروف فارسی باشد",
                },
                minLength: {
                  value: 2,
                  message: "نام استان باید حداقل ۲ حرف باشد",
                },
              }}
              errors={errors}
            />

            <TextFieldInput
              label="شهر"
              name="city"
              id="city"
              register={register}
              validationSchema={{
                required: "لطفا نام شهر را وارد کنید",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: "نام شهر باید فقط شامل حروف فارسی باشد",
                },
                minLength: {
                  value: 2,
                  message: "نام شهر باید حداقل ۲ حرف باشد",
                },
              }}
              errors={errors}
            />

            <TextFieldInput
              label="منطقه"
              name="area"
              id="area"
              register={register}
              validationSchema={{
                required: "لطفا نام منطقه را وارد کنید",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: "نام منطقه باید فقط شامل حروف فارسی باشد",
                },
                minLength: {
                  value: 2,
                  message: "نام منطقه باید حداقل ۲ حرف باشد",
                },
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-8 text-lg text-gray-800">مشخصات ملک متقاضی</h3>

          <div className="flex w-full items-stretch justify-between gap-6 [&>div>input]:!text-gray-800 [&>div>label]:!w-1/3">
            <TextFieldInput
              label="نوع مالکیت"
              name="ownershipType"
              id="ownershipType"
              register={register}
              validationSchema={{
                required: "لطفا نوع مالکیت را وارد کنید",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: "نوع مالکیت باید فقط شامل حروف فارسی باشد",
                },
                minLength: {
                  value: 2,
                  message: "نوع مالکیت باید حداقل ۲ حرف باشد",
                },
              }}
              errors={errors}
            />

            <TextFieldInput
              label="مساحت ملک (متر مربع)"
              name="areaSize"
              id="areaSize"
              register={register}
              validationSchema={{
                required: "لطفا مساحت ملک را وارد کنید",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "مساحت باید فقط شامل عدد باشد",
                },
                validate: (value) =>
                  Number(value) > 0 || "مساحت باید عددی بزرگ‌تر از صفر باشد",
              }}
              errors={errors}
            />

            <TextFieldInput
              label="سن بنا"
              name="buildingAge"
              id="buildingAge"
              register={register}
              validationSchema={{
                required: "لطفا سن بنا را وارد کنید",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "سن بنا باید فقط شامل عدد باشد",
                },
                validate: (value) =>
                  Number(value) >= 0 && Number(value) <= 200
                    ? true
                    : "عدد وارد شده معتبر نیست",
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="mb-6 text-lg text-gray-800">امکانات ملک متقاضی</h3>

          <div className="flex items-center gap-6">
            <span className="text-gray-700">ملک متقاضی:</span>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <input
                  id="hasLicense"
                  type="checkbox"
                  {...register("hasLicense")}
                  className="h-4 w-4 cursor-pointer accent-primary"
                />
                <label
                  htmlFor="hasLicense"
                  className="cursor-pointer text-sm text-gray-700"
                >
                  پروانه کسب دارد.
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="hasKitchen"
                  type="checkbox"
                  {...register("hasKitchen")}
                  className="h-4 w-4 cursor-pointer accent-primary"
                />
                <label
                  htmlFor="hasKitchen"
                  className="cursor-pointer text-sm text-gray-700"
                >
                  آشپزخانه دارد.
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="hasParking"
                  type="checkbox"
                  {...register("hasParking")}
                  className="h-4 w-4 cursor-pointer accent-primary"
                />
                <label
                  htmlFor="hasParking"
                  className="cursor-pointer text-sm text-gray-700"
                >
                  پارکینگ دارد.
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="hasStorage"
                  type="checkbox"
                  {...register("hasStorage")}
                  className="h-4 w-4 cursor-pointer accent-primary"
                />
                <label
                  htmlFor="hasStorage"
                  className="cursor-pointer text-sm text-gray-700"
                >
                  انبار دارد.
                </label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="primary-button">
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
}
export default FranchiseForm;
