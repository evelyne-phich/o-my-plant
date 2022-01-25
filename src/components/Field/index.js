import PropTypes from "prop-types";

import "./style.scss";

const Field = ({ value, type, name, placeholder, onChange }) => {
  const inputId = `field-${name}`;
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;
