const successResult = (data: any) => {
  return {
    success: true,
    ...data
  };
};

export { successResult };
