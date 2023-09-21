export const objToQuery = obj => {
  const filledValues = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => !!value),
  );

  return '?' + new URLSearchParams(filledValues).toString();
};

export const valueToDisplay = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('_', ' ');
};
