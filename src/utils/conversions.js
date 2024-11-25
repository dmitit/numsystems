/**
 * Universal function to convert a number between numeral systems.
 * @param {string} value - The number in the source numeral system.
 * @param {Array} fromAlphabet - Array of characters representing the source numeral system.
 * @param {Array} toAlphabet - Array of characters representing the target numeral system.
 * @returns {string} The number in the target numeral system.
 */
export const convertNumber = (value, fromAlphabet, toAlphabet) => {
  try {
    if (new Set(fromAlphabet).size !== fromAlphabet.length || 
        new Set(toAlphabet).size !== toAlphabet.length) {
      throw new Error("Alphabets contain duplicate characters.");
    }

    let decimal = [...value].reduce((acc, char) => {
      const index = fromAlphabet.indexOf(char);
      if (index === -1) throw new Error("Character not found in the source alphabet.");
      return acc * fromAlphabet.length + index;
    }, 0);

    let result = "";
    const base = toAlphabet.length;
    do {
      result = toAlphabet[decimal % base] + result;
      decimal = Math.floor(decimal / base);
    } while (decimal > 0);

    return result;
  } catch {
    return "";
  }
};

