import PropTypes from "prop-types";
import { useState } from "react";

const AddSystemForm = ({ onSubmit }) => {
   const [title, setTitle] = useState("");
   const [symbols, setSymbols] = useState("");

   const handleFormSubmit = (e) => {
      e.preventDefault();

      const uniqueSymbols = [...new Set(Array.from(symbols))];
      const regexp = new RegExp(`[${uniqueSymbols.join("")}]`);

      const newSystem = {
         title,
         symbols: uniqueSymbols,
         regexp,
      };
      console.log(newSystem);

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
               <label className="flex flex-col-reverse">
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
               <label className="flex flex-col-reverse">
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
               className="bg-black text-white py-[2px] px-[1.2rem] focus:font-normal focus:outline focus:outline-1 focus:outline-[#47ffe3] mt-[1.6rem]"
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
