const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_NOTES":
      return [...payload];
    default:
      return state;
  }
};

export { noteReducer };
