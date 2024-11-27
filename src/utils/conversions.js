/**
 * Universal function to convert a number between numeral systems.
 * @param {string} value - The number in the source numeral system.
 * @param {Array} fromAlphabet - Array of characters representing the source numeral system.
 * @param {Array} toAlphabet - Array of characters representing the target numeral system.
 * @returns {string} The number in the target numeral system.
 */
export const convertNumber = (value, fromAlphabet, toAlphabet) => {
   try {
      if (!value || !fromAlphabet || !toAlphabet) {
         return "";
      }

      const uniqueFromAlphabet = [...new Set(fromAlphabet)];
      const uniqueToAlphabet = [...new Set(toAlphabet)];

      const fromBase = uniqueFromAlphabet.length;
      const toBase = uniqueToAlphabet.length;

      let leadingZerosCount = 0;
      while (value[leadingZerosCount] === uniqueFromAlphabet[0]) {
         leadingZerosCount++;
      }

      let decimal = value.split("").reduce((acc, char) => {
         const index = uniqueFromAlphabet.indexOf(char);
         return acc * fromBase + index;
      }, 0);

      if (decimal === 0) return uniqueToAlphabet[0].repeat(leadingZerosCount);

      let result = "";
      while (decimal > 0) {
         result = uniqueToAlphabet[decimal % toBase] + result;
         decimal = Math.floor(decimal / toBase);
      }

      return uniqueToAlphabet[0].repeat(leadingZerosCount) + result;
   } catch (err) {
      console.error(err);
      return "";
   }
};
