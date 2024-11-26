/**
 * Universal function to convert a number between numeral systems.
 * @param {string} value - The number in the source numeral system.
 * @param {Array} fromAlphabet - Array of characters representing the source numeral system.
 * @param {Array} toAlphabet - Array of characters representing the target numeral system.
 * @returns {string} The number in the target numeral system.
 */
export const convertNumber = (value, fromAlphabet, toAlphabet) => {
  try {
    const correctedFromAlphabet = [...new Set(fromAlphabet)]
    const correctedToAlphabet = [...new Set(toAlphabet)]

    let decimal = [...value].reduce((acc, char) => {
      const index = correctedFromAlphabet.indexOf(char);
      return acc * correctedFromAlphabet.length + index;
    }, 0);

    let result = "";
    const base = correctedToAlphabet.length;
    do {
      result = correctedToAlphabet[decimal % base] + result;
      decimal = Math.floor(decimal / base);
    } while (decimal > 0);

    return result;
  } catch(err) {
    console.log(err);
    return "";
  }
};

