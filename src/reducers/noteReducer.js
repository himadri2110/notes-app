const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return [...payload.notes];
    default:
      return state;
  }
};

export { noteReducer };
