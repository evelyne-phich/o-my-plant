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
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Field;
