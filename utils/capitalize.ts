export const capitalizeFirstLetter = (text?: string) =>
  typeof text === "string" ? text.charAt(0).toUpperCase() + text.slice(1) : "";
