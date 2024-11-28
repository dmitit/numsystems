import AddSystemForm from "./components/AddSystemForm";
import Converter from "./components/Converter";
import { useState } from "react";
import CoreHeader from "./components/CoreHeader";
import CoreContainer from "./components/CoreContainer";

const App = () => {
   const [systems, setSystems] = useState([
      {
         title: "Binary",
         symbols: ["0", "1"],
         regexp: /^[01]+$/,
      },
      {
         title: "Octal",
         symbols: ["0", "1", "2", "3", "4", "5", "6", "7"],
         regexp: /^[0-7]+$/,
      },
      {
         title: "Decimal",
         symbols: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
         regexp: /^[0-9]+$/,
      },
      {
         title: "Hexadecimal",
         symbols: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
         ],
         regexp: /^[0-9A-F]+$/i,
      },
   ]);

   const addSystem = (newSystem) => {
      setSystems((prevSystems) => [...prevSystems, newSystem]);
   };

   return (
      <div>
         <CoreHeader />
         <CoreContainer>
            <div className="flex justify-between mt-[4rem] gap-x-[5rem]">
               <div className="flex-[3]">
                  <h1 className="text-[2.2rem] font-normal">
                     Number System Converter
                  </h1>
                  <p className="mt-[0.6rem]">
                     Explore the ultimate tool for converting numbers between
                     various numeral systems! Whether you&apos;re working with
                     binary, decimal, hexadecimal, or any custom base, this
                     intuitive converter has you covered.
                  </p>
                  <div className="mt-[2rem]">
                     <h2 className="text-[2rem] font-normal">Key Features:</h2>
                     <ul className="pl-[2.6rem] mt-[0.6rem] list-decimal">
                        <li>
                           <b>Real-Time Conversion:</b> Instantly see how a
                           number in one system translates to others.
                        </li>
                        <li>
                           <b>Customizable Systems:</b> Add your own numeral
                           systems to expand the converter&apos;s functionality.
                        </li>
                        <li>
                           <b>Dynamic Inputs:</b> Seamlessly switch between
                           systems and edit values for precise conversions.
                        </li>
                     </ul>
                  </div>
                  <div className="mt-[2rem]">
                     <h2 className="text-[2rem] font-normal">
                        Add Custom System
                     </h2>
                     <div className="mt-[0.6rem]">
                        <AddSystemForm onSubmit={addSystem} />
                     </div>
                  </div>
               </div>
               <div className="flex-[2]">
                  <Converter systems={systems} />
               </div>
            </div>
         </CoreContainer>
      </div>
   );
};

export default App;
