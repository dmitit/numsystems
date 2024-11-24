import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import { convertNumber } from "../utils/conversions";

const Converter = ({ systems }) => {
   const [values, setValues] = useState(
      systems.reduce((acc, base) => ({ ...acc, [base]: "" }), {})
   );

   const handleInputChange = (value, fromBase) => {
      const newValues = systems.reduce((acc, base) => {
         if (value === "") {
            acc[base] = "";
         } else {
            acc[base] = convertNumber(value, fromBase, base);
         }
         return acc;
      }, {});

      setValues(newValues);
   };

   return (
      <div>
         {systems.map((base) => (
            <InputField
               key={base}
               label={`System ${base}`}
               value={values[base]}
               base={base}
               onChange={handleInputChange}
            ></InputField>
         ))}
      </div>
   );
};

Converter.propTypes = {
   systems: PropTypes.array.isRequired,
};

export default Converter;
