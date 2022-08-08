import { InputBox } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <InputBox>
      <span className="label">{label}</span>
      <input {...props} />
    </InputBox>
  );
}

export default Input;
