export const defaultProps = () => {
  return {
    collectionName: {
      type: String,
      required: true,
    },
    itemId: {
      type: [String, Number],
      required: true,
    },
  };
};
