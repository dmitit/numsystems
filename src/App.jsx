import AddSystemForm from "./components/AddSystemForm";
import Converter from "./components/Converter";
import { useState } from "react";

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
      <div style={{ padding: "2rem" }}>
         <h1>Number System Converter</h1>
         <Converter systems={systems} />
         <AddSystemForm onSubmit={addSystem} />
      </div>
   );
};

export default App;
