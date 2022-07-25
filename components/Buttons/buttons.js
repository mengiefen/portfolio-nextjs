import Btn from "./buttons.styled";

const Button = ({ type, text, link }) => {
  return (
    <Btn
      type="button"
      underline
      href={link}
      target={link !== "#contact" && "_blank"}
    >
      {type === "underline" ? (
        <span className="underline"></span>
      ) : (
        <span className="slide">{text}</span>
      )}
      <span>{text}</span>{" "}
    </Btn>
  );
};

export default Button;
