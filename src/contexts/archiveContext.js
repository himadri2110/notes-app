import { createContext, useContext, useEffect } from "react";
import { useAuth, useNotes } from "contexts";
import {
  getArchivedService,
  archiveNoteService,
  unArchiveNoteService,
  archivesToTrashService,
} from "services";
import { actionTypes } from "reducers/actionTypes";

const ArchiveContext = createContext();

const { SET_NOTES_AND_ARCHIVE, SET_ARCHIVE_AND_TRASH, SET_ARCHIVED } =
  actionTypes;

const ArchiveProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const { dispatchNote } = useNotes();

  useEffect(() => {
    if (isAuth) {
      (async () => {
        const { data, status } = await getArchivedService(token);

        if (status === 200) {
          dispatchNote({ type: SET_ARCHIVED, payload: data.archives });
        }
      })();
    }
  }, [token]);

  const archiveNote = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await archiveNoteService(note, token);

      if (status === 201) {
        dispatchNote({
          type: SET_NOTES_AND_ARCHIVE,
          payload: { notes: data.notes, archives: data.archives },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const unArchiveNote = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await unArchiveNoteService(note, token);

      if (status === 200) {
        dispatchNote({
          type: SET_NOTES_AND_ARCHIVE,
          payload: { notes: data.notes, archives: data.archives },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const archivesToTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await archivesToTrashService(note, token);

      if (status === 200) {
        dispatchNote({
          type: SET_ARCHIVE_AND_TRASH,
          payload: { archives: data.archives, trash: data.trash },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ArchiveContext.Provider
      value={{ archiveNote, unArchiveNote, archivesToTrash }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
