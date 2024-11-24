import Converter from "./components/Converter";

const App = () => {
   const systems = [2, 8, 10, 16];
   console.log(systems);

   return (
      <div style={{ padding: "2rem" }}>
         <h1>Number System Converter</h1>
         <Converter systems={systems} />
      </div>
   );
};

export default App;
