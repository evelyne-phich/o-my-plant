import PropTypes from "prop-types";

import "./style.scss";

const FieldImage = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  disabled,
  accept,
  className,
  required,
}) => {
  const inputId = `field-${name}`;
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        id={inputId}
        type={type}
        className={className ? `${className} field-input` : "field-input"}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        accept={accept}
        required={required}
      />
    </div>
  );
};

FieldImage.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FieldImage;
