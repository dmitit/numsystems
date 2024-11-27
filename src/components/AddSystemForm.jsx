import PropTypes from "prop-types";
import { useState } from "react";

const AddSystemForm = ({ onSubmit }) => {
   const [title, setTitle] = useState("");
   const [symbols, setSymbols] = useState("");

   const handleFormSubmit = (e) => {
      e.preventDefault();

      const uniqueSymbols = [...new Set(symbols.split(""))];
      const regexp = new RegExp(`[${uniqueSymbols.join("")}]`);

      const newSystem = {
         title,
         symbols: uniqueSymbols,
         regexp,
      };

      onSubmit(newSystem);

      setTitle("");
      setSymbols("");
   };

   return (
      <div>
         <h2>Manage System</h2>
         <form onSubmit={handleFormSubmit}>
            <div>
               <label>
                  Title:
                  <input
                     type="text"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     required
                  />
               </label>
            </div>
            <div>
               <label>
                  Symbols:
                  <input
                     type="text"
                     value={symbols}
                     onChange={(e) => setSymbols(e.target.value)}
                     required
                  />
               </label>
            </div>
            <button type="submit">Generate</button>
         </form>
      </div>
   );
};

AddSystemForm.propTypes = {
   onSubmit: PropTypes.func,
};

export default AddSystemForm;
