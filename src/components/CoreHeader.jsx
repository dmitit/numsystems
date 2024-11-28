import CoreContainer from "./CoreContainer";

const CoreHeader = () => {
   return (
      <header className="bg-black py-[1rem]">
         <CoreContainer>
            <div className="max-w-[1600px] mx-auto">
               <a
                  href="#dmitit"
                  className="text-white text-[3rem] group transition-[color] duration-300 font-medium"
               >
                  convert
                  <span
                     className="group-hover:text-[#47ffe3]"
                     style={{ fontWeight: "inherit" }}
                  >
                     /
                  </span>
                  it
               </a>
            </div>
         </CoreContainer>
      </header>
   );
};

export default CoreHeader;
