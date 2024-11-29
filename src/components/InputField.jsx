import PropTypes from "prop-types";
import { useState } from "react";

const InputField = ({ label, value, base, onChange, onSystemRemove }) => {
   const [isFocused, setIsFocused] = useState(false);

   const handleFocus = () => setIsFocused(true);
   const handleBlur = () => setIsFocused(false);

   return (
      <label className="flex flex-col">
         <span
            className={`flex flex-col-reverse max-w-[50%] ${isFocused ? "font-normal" : ""}`}
         >
            {label}
         </span>
         <div className="flex gap-x-[0.6rem]">
            <input
               type="text"
               value={value}
               onChange={(e) => onChange(e.target.value, base)}
               onFocus={handleFocus}
               onBlur={handleBlur}
               className="pl-[2px] py-[2px] focus:outline focus:outline-1 focus:outline-[#47ffe3] flex-1"
            />
            <button
               className="px-[1.2rem] bg-black text-white focus:outline focus:font-normal focus:outline-1 focus:outline-[#47ffe3]"
               onClick={() => onSystemRemove(base)}
            >
               Delete
            </button>
         </div>
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
   onSystemRemove: PropTypes.func,
};

export default InputField;
