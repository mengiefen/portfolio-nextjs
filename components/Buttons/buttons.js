import Btn from './buttons.styled';

const Button = ({ type, text }) => {
  return (
    <Btn type="button" underline>
      {type === 'underline' ? (
        <span className="underline"></span>
      ) : (
        <span className="slide">{text}</span>
      )}
      <span>{text}</span>
    </Btn>
  );
};

export default Button;
