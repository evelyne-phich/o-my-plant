import PropTypes from "prop-types";

import "./style.scss";

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  disabled,
  className,
  required,
}) => {
  const inputId = `field-${name}`;
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        id={inputId}
        type={type}
        className={className ? `${className} field-input` : "field-input"}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        required={required ? required : false}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Field;
