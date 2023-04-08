import css from './button.module.css';

const BUTTON_TYPE_CLASSES = {
  basic: 'basic-button',
  inverted: 'inverted-button',
  accented: 'accented-button',
  transparentBg: 'transparent-bg-button'
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button 
      className={css['button-container'] + ' ' + css[BUTTON_TYPE_CLASSES[buttonType]]}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;