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
         <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-y-[0.2rem]"
         >
            <div>
               <label className="flex flex-col-reverse max-w-[50%]">
                  <input
                     type="text"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     required
                     className="peer pl-[2px] py-[2px] focus:outline focus:outline-1 focus:outline-[#47ffe3]"
                  />
                  <span className="peer-focus:font-normal">Title</span>
               </label>
            </div>
            <div>
               <label className="flex flex-col-reverse max-w-[50%]">
                  <input
                     type="text"
                     value={symbols}
                     onChange={(e) => setSymbols(e.target.value)}
                     required
                     className="peer pl-[2px] py-[2px] focus:outline focus:outline-1 focus:outline-[#47ffe3]"
                  />
                  <span className="peer-focus:font-normal">Symbols</span>
               </label>
            </div>
            <button
               className="border-[1px] border-[#000000] border-solid py-[0.2rem] px-[2rem] focus:outline focus:outline-1 focus:outline-[#47ffe3] self-baseline mt-[1.6rem]"
               type="submit"
            >
               Add
            </button>
         </form>
      </div>
   );
};

AddSystemForm.propTypes = {
   onSubmit: PropTypes.func,
};

export default AddSystemForm;
