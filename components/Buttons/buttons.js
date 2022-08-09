import Btn from './buttons.styled';

const Button = ({ type, text, link, icon }) => {
  return (
    <Btn type="button" href={link} target={link !== '#contact' && '_blank'}>
      {type === 'underline' ? (
        <span className="underline"></span>
      ) : (
        <span className="slide">{text}</span>
      )}
      <span>{text}</span>
      {icon}
    </Btn>
  );
};

export default Button;
