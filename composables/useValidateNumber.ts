export default () => {
  const validateNumber = (number: number) => {
    let messages = [] as string[];
    if (number <= 0) messages.push(`The input Number must be more than zero.`);
    return messages.length > 0 ? messages : true;
  };
  return { validateNumber };
};
