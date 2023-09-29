import { ButtonElement } from './style';
import PropTypes from 'prop-types';

export const Button = ({
  name,
  onClick,
  className = ' ',
  type = 'button',
  style,
  color = 'defualt',
}) => {
  return (
    <ButtonElement
      style={style}
      className={className}
      onClick={onClick}
      type={type}
      colorbtn={color}
    >
      {name}
    </ButtonElement>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
};
