interface Buttonprops {
  withplane: boolean,
  text:string
}
const Button = ({ text,withplane }: Buttonprops) => {
  return (
    <button type="submit" className="btn ">
      {text} {withplane && <i className="fa-solid fa-paper-plane"></i>}
    </button>
  );
};
export default Button;
