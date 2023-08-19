interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; // add ? --> this param is optional, Use | to constrain the param
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
