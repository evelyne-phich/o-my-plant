import PropTypes from "prop-types";

import "./style.scss";

const Field = ({ value, type, name, placeholder, onChange }) => {
  /*const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };*/

  const inputId = `field-${name}`;
  // className={value.length > 0 ? "field field--has-content" : "field"}
  return (
    <div>
      <input
        // React - state
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};
/*
Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};*/

// Valeurs par défaut pour les props
// Field.defaultProps = {
//   value: "",
//   type: "text",
// };

// == Export
export default Field;
