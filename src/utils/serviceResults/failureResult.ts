interface Props {
  type: String;
  message?: String;
}

const failureResult = ({ type, message }: Props) => {
  return {
    success: false,
    error: {
      type,
      message
    }
  };
};

export { failureResult };
