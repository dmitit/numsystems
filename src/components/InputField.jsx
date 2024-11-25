import PropTypes from "prop-types";

const InputField = ({ label, value, base, onChange }) => {
   return (
      <div>
         <label>{label}</label>
         <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value, base)}
         />
      </div>
   );
};

InputField.propTypes = {
   label: PropTypes.string,
   value: PropTypes.string,
   base: PropTypes.shape({
      title: PropTypes.string.isRequired,
      symbols: PropTypes.array.isRequired,
      regexp: PropTypes.instanceOf(RegExp).isRequired,
   }),
   onChange: PropTypes.func,
};

export default InputField;
