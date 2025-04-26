interface inputProps {
    title: string;
    name: string;
    type: string;
    maxLength: number;
  }
const Input = ({title,name,type,maxLength}:inputProps) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {title} <span className="mandate">*</span>
      </label>
      <input
        maxLength={maxLength}
        name={name}
        type={type}
        id={name}
        className="form-control"
        required
      />
    </>
  );
};
export default Input;
