import { createContext, useContext, useState, useReducer } from "react";
import { noteReducer } from "reducers/noteReducer";
import { useAuth } from "contexts";
import { addNoteService, editNoteService, deleteNoteService } from "services";

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
  const { token } = useAuth();

  const [input, setInput] = useState(formInputs);
  const [noteState, dispatchNote] = useReducer(noteReducer, []);
  const [showInput, setShowInput] = useState(false);

  const noteExists = noteState.find((note) => note._id === input._id);

  const submitForm = async (e) => {
    e.preventDefault();

    if (noteExists) {
      try {
        const { data, status } = await editNoteService(
          { ...noteExists, title: input.title, content: input.content },
          token
        );

        if (status === 201) {
          dispatchNote({ type: "GET_NOTES", payload: data.notes });
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const { data, status } = await addNoteService(
          {
            ...input,
            isPinned: false,
            createdTime: new Date().toLocaleString(),
          },
          token
        );
        if (status === 201) {
          dispatchNote({ type: "GET_NOTES", payload: data.notes });
        }
      } catch (err) {
        console.error(err);
      }
    }

    closeNote();
  };

  const deleteNote = async (e, id) => {
    e.stopPropagation();

    try {
      const { data, status } = await deleteNoteService(id, token);

      if (status === 200) {
        dispatchNote({ type: "GET_NOTES", payload: data.notes });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const closeNote = () => {
    setInput(formInputs);
    setShowInput(false);
  };

  return (
    <NotesContext.Provider
      value={{
        input,
        setInput,
        formInputs,
        noteState,
        dispatchNote,
        notesObj,
        showInput,
        setShowInput,
        submitForm,
        noteExists,
        closeNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
