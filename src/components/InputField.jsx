import PropTypes from "prop-types";

const InputField = ({ label, value, base, onChange }) => {
   return (
      <label className="flex flex-col-reverse">
         <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value, base)}
            className="peer pl-[2px] py-[2px] focus:outline focus:outline-1 focus:outline-[#47ffe3]"
         />
         <span className="peer-focus:font-normal flex flex-col-reverse max-w-[50%]">
            {label}
         </span>
      </label>
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
