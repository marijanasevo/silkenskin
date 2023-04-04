import css from './form-input-field.module.css'

const FormInputField = ({label, ...otherProps}) => {
 return (
  <div className={css["form-input-field"]}>
    <label 
      className={css['form-input-field__label'] + ` ${otherProps.value.length ? (css['shrink']) : ''}`}
    >
      {label}
    </label>

    <input 
      className={css['form-input-field__input']}
      {...otherProps}
    /> 
  </div>
 )
};

export default FormInputField;