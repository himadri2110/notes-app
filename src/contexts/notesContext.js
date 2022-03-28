import { createContext, useContext, useState, useReducer } from "react";
import { noteReducer } from "reducers/noteReducer";

const NotesContext = createContext();

const formInputs = {
  title: "",
  content: "",
};

const notesObj = {
  id: "",
  title: "",
  content: "",
  initialBgColor: "#f3f3f3",
  isPinned: true,
  createdTime: "",
};

const NotesProvider = ({ children }) => {
  const [input, setInput] = useState(formInputs);
  const [noteState, dispatchNote] = useReducer(noteReducer, []);

  console.log(noteState, "state");
  return (
    <NotesContext.Provider
      value={{ input, setInput, formInputs, noteState, dispatchNote, notesObj }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
