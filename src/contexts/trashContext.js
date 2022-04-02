import { createContext, useContext, useEffect } from "react";
import { useAuth, useNotes } from "contexts";
import {
  getTrashService,
  moveToTrashService,
  restoreFromTrashService,
  deleteFromTrashService,
} from "services";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const { dispatchNote } = useNotes();

  useEffect(() => {
    if (isAuth) {
      (async () => {
        const { data, status } = await getTrashService(token);

        if (status === 201) {
          dispatchNote({ type: "SET_TRASH", payload: data.trash });
        }
      })();
    }
  }, [token]);

  const moveToTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await moveToTrashService(note, token);

      if (status === 201) {
        dispatchNote({
          type: "SET_NOTES_AND_TRASH",
          payload: { notes: data.notes, trash: data.trash },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const restoreFromTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await restoreFromTrashService(note, token);

      if (status === 200) {
        dispatchNote({
          type: "SET_NOTES_AND_TRASH",
          payload: { notes: data.notes, trash: data.trash },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteFromTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await deleteFromTrashService(note, token);

      if (status === 200) {
        dispatchNote({
          type: "SET_TRASH",
          payload: data.trash,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TrashContext.Provider
      value={{ moveToTrash, restoreFromTrash, deleteFromTrash }}
    >
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
