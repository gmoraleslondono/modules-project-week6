export const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

export const countCharacters = (str: string): number => {
  return str.length;
};

export const countCharactersIgnoreSpaces = (str: string): number => {
  return str.replace(/\s/g, "").length;
};

export const addCuteEmoji = (str: string): string => {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return str + " 🐶";
    case 1:
      return str + " 🐱";
    case 2:
      return str + " 🐹";
    case 3:
      return str + " 🦄";
    default:
      return str + " 🤪";
  }
};
