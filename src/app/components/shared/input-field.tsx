import styles from "@/app/styles/input-field.module.css";
import clsx from "clsx";
interface InputProps {
  className?: string | Record<string, boolean>;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export default function InputField({
  type,
  className,
  placeholder,
  value,
  onChange,
  name,
}: InputProps) {
  return (
    <input
      className={clsx(styles.inputField, className)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
