interface inputProps {
  title: string;
  name: string;
  type: string;
  maxLength: number;
  required: boolean;
}
const Input = ({ title, name, type, maxLength, required }: inputProps) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {title} {required && <span className="mandate">*</span>}
      </label>
      <input
        maxLength={maxLength}
        name={name}
        type={type}
        id={name}
        className="form-control"
        required={required}
      />
    </>
  );
};
export default Input;
