import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextFieldInput from "../../UI/TextFieldInput";
import TextAreaFieldInput from "../../UI/TextAreaFieldInput";

interface FooterFormValues {
  name: string;
  mobileNumber: string;
  email: string;
  message: string;
}

function FooterForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FooterFormValues>();

  const messageLength = watch("message");

  const onSubmit = (data: FooterFormValues) => {
    console.log(data);

    toast.success("پیام شما با موفقیت ارسال شد");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-[auto,auto] grid-rows-[auto,auto] justify-items-end gap-x-3 gap-y-2 xl:gap-x-6"
    >
      <div className="flex flex-col gap-y-[18px]">
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
          label="شماره موبایل"
          name="mobileNumber"
          id="mobileNumber"
          register={register}
          validationSchema={{
            required: "لطفا شماره موبایل خود را وارد کنید",
            pattern: {
              value: /^09[0-9]{9}$/,
              message: "شماره موبایل وارد شده نامعتبر است",
            },
          }}
          errors={errors}
          type="number"
        />

        <TextFieldInput
          label="ایمیل (اختیاری)"
          name="email"
          id="email"
          register={register}
          validationSchema={{
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل وارد شده نامعتبر است",
            },
          }}
          errors={errors}
        />
      </div>

      <div className="flex flex-col items-end">
        <TextAreaFieldInput
          label="پیام شما"
          name="message"
          id="message"
          register={register}
          validationSchema={{
            required: "لطفا پیام خود را وارد کنید",
            minLength: {
              value: 5,
              message: "پیام باید بیشتر از ۵ کارکتر باشد",
            },
            maxLength: {
              value: 200,
              message: "پیام باید کمتر از ۲۰۰ کارکتر باشد",
            },
          }}
          errors={errors}
        />

        <span className="mt-1 text-xs font-light text-white">
          <span>{messageLength ? messageLength.length : "0"}</span>
          <span>/۲۰۰</span>
        </span>
      </div>

      <button className="outline-button col-start-2 w-3/4 border-gray-500 hover:border-tint-700 hover:text-tint-700">
        ارسال پیام
      </button>
    </form>
  );
}
export default FooterForm;
