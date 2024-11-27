/**
 * Universal function to convert a number between numeral systems.
 * @param {string} value - The number in the source numeral system.
 * @param {Array} fromAlphabet - Array of characters representing the source numeral system.
 * @param {Array} toAlphabet - Array of characters representing the target numeral system.
 * @returns {string} The number in the target numeral system.
 */
export const convertNumber = (value, fromAlphabet, toAlphabet) => {
   try {
      // Check for empty input or invalid alphabet lengths
      if (
         !value ||
         !fromAlphabet ||
         !toAlphabet ||
         fromAlphabet.length < 2 ||
         toAlphabet.length < 2
      ) {
         return "";
      }

      // Remove duplicates and check for empty alphabets
      const uniqueFromAlphabet = [...new Set(fromAlphabet)];
      const uniqueToAlphabet = [...new Set(toAlphabet)];

      const fromBase = uniqueFromAlphabet.length;
      const toBase = uniqueToAlphabet.length;

      // Handle leading zeros
      let leadingZerosCount = 0;
      while (value[leadingZerosCount] === uniqueFromAlphabet[0]) {
         leadingZerosCount++;
      }

      // Convert to decimal
      let decimal = value.split("").reduce((acc, char) => {
         const index = uniqueFromAlphabet.indexOf(char);
         return acc * fromBase + index;
      }, 0);

      // Convert decimal to target base
      if (decimal === 0) return uniqueToAlphabet[0].repeat(leadingZerosCount);

      let result = "";
      while (decimal > 0) {
         result = uniqueToAlphabet[decimal % toBase] + result;
         decimal = Math.floor(decimal / toBase);
      }

      // Return the result with leading zeros preserved
      return uniqueToAlphabet[0].repeat(leadingZerosCount) + result;
   } catch (err) {
      console.error(err);
      return "";
   }
};
