export const convertNumber = (value, fromBase, toBase) => {
   try {
      const decimal = parseInt(value, fromBase);
      if (isNaN(decimal)) return "";
      return decimal.toString(toBase).toUpperCase();
   } catch {
      return "";
   }
};
