const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NOTES":
      return { ...state, notes: payload };
    case "SET_ARCHIVED":
      return { ...state, archives: payload };
    case "SET_NOTES_AND_ARCHIVE":
      return { ...state, notes: payload.notes, archives: payload.archives };
    default:
      return state;
  }
};

export { noteReducer };
