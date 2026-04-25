import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface TextAreaFieldInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  id: string;
  register: UseFormRegister<T>;
  validationSchema: RegisterOptions<T, Path<T>>;
  errors: FieldErrors<T>;
}

function TextAreaFieldInput<T extends FieldValues>({
  label,
  name,
  id,
  register,
  validationSchema,
  errors,
}: TextAreaFieldInputProps<T>) {
  return (
    <div
      className={`${errors && errors[name] ? "border-error-200 focus-within:border-error-200 hover:border-error-200" : "border-gray-500 focus-within:border-tint-700 hover:border-tint-700"} relative min-w-52 rounded border bg-transparent px-3 pb-2 pt-5 text-sm font-light text-white transition-all duration-200 xl:min-w-64`}
    >
      <label
        htmlFor={id}
        className="absolute -top-3 mr-2 w-1/2 rounded bg-primary px-2 py-1 text-center text-xs"
      >
        {label}
      </label>

      <textarea
        {...register(name, validationSchema)}
        className="min-h-[150px] min-w-52 resize-none bg-transparent xl:min-w-64"
        name={name}
        id={id}
      ></textarea>

      {errors && errors[name] && (
        <span className="mt-2 block border-t border-t-gray-500 text-sm text-gray-500">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
}
export default TextAreaFieldInput;
