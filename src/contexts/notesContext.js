import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { noteReducer } from "reducers/noteReducer";
import { useAuth } from "contexts";
import { getNoteService, addNoteService, editNoteService } from "services";

const NotesContext = createContext();

const formInputs = {
  title: "",
  content: "",
};

const NotesProvider = ({ children }) => {
  const { isAuth, token } = useAuth();

  const [input, setInput] = useState(formInputs);
  const [noteState, dispatchNote] = useReducer(noteReducer, {
    notes: [],
    archives: [],
  });
  const [showInput, setShowInput] = useState(false);

  const noteExists = noteState.notes.find((note) => note._id === input._id);

  useEffect(() => {
    if (isAuth) {
      (async () => {
        const { data, status } = await getNoteService(token);

        if (status === 200) {
          dispatchNote({ type: "SET_NOTES", payload: data.notes });
        }
      })();
    }
  }, [token]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (noteExists) {
      try {
        const { data, status } = await editNoteService(
          { ...noteExists, title: input.title, content: input.content },
          token
        );

        if (status === 201) {
          dispatchNote({ type: "SET_NOTES", payload: data.notes });
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
          dispatchNote({ type: "SET_NOTES", payload: data.notes });
        }
      } catch (err) {
        console.error(err);
      }
    }

    closeNote();
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
        showInput,
        setShowInput,
        submitForm,
        noteExists,
        closeNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
