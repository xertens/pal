export default () => {
  const validate = (data: any) => {
    let messages = [] as string[];

    Object.keys(data).forEach((key: string) => {
      if (typeof data[key] == "string" && data[key] == "") {
        messages.push(`The input (${key}) must be string.`);
      }
    });

    return messages.length > 0 ? messages : true;
  };

  return {
    validate,
  };
};
