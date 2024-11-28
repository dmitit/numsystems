import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import { convertNumber } from "../utils/conversions";

const Converter = ({ systems, onSystemRemove }) => {
   const [values, setValues] = useState(
      systems.reduce((acc, system) => ({ ...acc, [system.title]: "" }), {})
   );

   const handleInputChange = (value, fromSystem) => {
      const newValues = systems.reduce((acc, system) => {
         if (!value.length) {
            acc[system.title] = "";
         } else {
            if (!fromSystem.regexp.test(value)) {
               acc[system.title] = values[system.title];
            } else {
               acc[system.title] = convertNumber(
                  value,
                  fromSystem.symbols,
                  system.symbols
               );
            }
         }

         return acc;
      }, {});

      setValues(newValues);
   };

   return (
      <div>
         {systems.map((system) => (
            <div key={system.title}>
               <InputField
                  label={`System ${system.title}`}
                  value={values[system.title]}
                  base={system}
                  onChange={(value) => handleInputChange(value, system)}
               ></InputField>
               <button
                  className="bg-red-300"
                  onClick={() => onSystemRemove(system)}
               >
                  Delete
               </button>
            </div>
         ))}
      </div>
   );
};

Converter.propTypes = {
   systems: PropTypes.arrayOf(
      PropTypes.shape({
         title: PropTypes.string.isRequired,
         symbols: PropTypes.array.isRequired,
         regexp: PropTypes.instanceOf(RegExp).isRequired,
      })
   ).isRequired,
   onSystemRemove: PropTypes.func,
};

export default Converter;
