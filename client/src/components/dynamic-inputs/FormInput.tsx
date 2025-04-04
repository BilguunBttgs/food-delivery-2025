import { Input } from "../ui/input";

type FormInputProps = {
  inputErrorMessage?: string;
  inputError?: string | false;
  name: string;
  placeholder: string;
};
export const FormInput = ({
  inputErrorMessage,
  inputError = false,
  name,
  placeholder,
  ...props
}: FormInputProps) => {
  const inputBorderErrorStyle = inputError ? "border-red-500" : "";

  return (
    <div className="flex flex-col space-y-1.5">
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        className={inputBorderErrorStyle}
        {...props}
      />
      {inputError && (
        <span className="text-sm text-red-500">{inputErrorMessage}</span>
      )}
    </div>
  );
};
