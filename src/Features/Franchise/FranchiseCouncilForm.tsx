import { useForm } from "react-hook-form";
import TextFieldInput from "../../UI/TextFieldInput";
import toast from "react-hot-toast";

interface FranchiseCouncilFormValues {
  name: string;
  phone: string;
  time: string;
}

function FranchiseCouncilForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FranchiseCouncilFormValues>();

  const onSubmit = (data: FranchiseCouncilFormValues) => {
    console.log(data);
    reset();
    toast.success("درخواست شما با موافقت ثبت شد");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-6 border-b border-gray-400 p-12"
    >
      <h2 className="mb-6 text-2xl font-bold text-gray-800">دریافت مشاوره</h2>

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

        <TextFieldInput
          label="زمان ایده‌آل"
          name="time"
          id="time"
          register={register}
          validationSchema={{
            required: "لطفا زمان ایده‌آل خود را وارد کنید",
            pattern: {
              value: /^([01]\d|2[0-3]):([0-5]\d)$/,
              message: "زمان باید در قالب HH:MM باشد (مثال: 14:30)",
            },
          }}
          errors={errors}
        />
      </div>

      <button type="submit" className="primary-button">
        درخواست مشاوره
      </button>
    </form>
  );
}
export default FranchiseCouncilForm;
