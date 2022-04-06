import "./NoteCard.css";
import { useState } from "react";
import {
  ColorLensOutlinedIcon,
  ArchiveOutlinedIcon,
  UnarchiveOutlinedIcon,
  DeleteOutlinedIcon,
  RestoreFromTrashOutlinedIcon,
  DeleteForeverOutlinedIcon,
  BarChartIcon,
} from "assets/index";
import { useArchive, useNotes, useTrash } from "contexts";
import { ColorPallete, PriorityField } from "components";

const NoteCard = ({ note }) => {
  const { _id, title, content, tags, createdTime, bgColor, priority } = note;
  const [showCardOptions, setShowCardOptions] = useState(false);
  const [showColorPallete, setShowColorPallete] = useState(false);
  const [showPriorityField, setShowPriorityField] = useState(false);

  const {
    noteState: { archives, trash },
    setShowInput,
    setInput,
    setIsEditing,
  } = useNotes();
  const { archiveNote, unArchiveNote, archivesToTrash } = useArchive();
  const { moveToTrash, restoreFromTrash, deleteFromTrash } = useTrash();

  const inArchive = archives?.find((eachNote) => eachNote._id === note._id);
  const inTrash = trash?.find((eachNote) => eachNote._id === note._id);

  const editNote = () => {
    setShowInput(true);
    setInput(note);
    setIsEditing(true);
  };

  return (
    <div
      key={_id}
      className="card-wrapper card-w-badge note-card"
      onMouseOver={() => setShowCardOptions((show) => !show)}
      onMouseOut={() => setShowCardOptions((show) => !show)}
      onClick={!inTrash && editNote}
      style={{ backgroundColor: bgColor }}
    >
      <div className="card-body">
        <div className="card-text">
          <div className="card-heading">{title}</div>
          <div
            className="card-content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          {tags.length > 0 ? (
            <div className="card-label">{tags[0]} </div>
          ) : null}
        </div>

        {priority ? (
          <div className="card-badge">{Object.keys(priority)[0]}</div>
        ) : null}
      </div>

      <div
        className="card-action"
        style={{ visibility: showCardOptions ? "visible" : "hidden" }}
      >
        <div className="card-time">{createdTime}</div>

        <div className="card-icons">
          <i
            role="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowPriorityField(false);
              setShowColorPallete((show) => !show);
            }}
          >
            <ColorLensOutlinedIcon />
          </i>
          <i
            role="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowColorPallete(false);
              setShowPriorityField((show) => !show);
            }}
          >
            <BarChartIcon />
          </i>
          {!inTrash && (
            <i role="button">
              {inArchive ? (
                <UnarchiveOutlinedIcon
                  onClick={(e) => unArchiveNote(e, note)}
                />
              ) : (
                <ArchiveOutlinedIcon onClick={(e) => archiveNote(e, note)} />
              )}
            </i>
          )}
          <i role="button">
            {inTrash ? (
              <RestoreFromTrashOutlinedIcon
                onClick={(e) => restoreFromTrash(e, note)}
              />
            ) : (
              <DeleteOutlinedIcon
                onClick={(e) =>
                  inArchive ? archivesToTrash(e, note) : moveToTrash(e, note)
                }
              />
            )}
          </i>
          {inTrash && (
            <i role="button">
              <DeleteForeverOutlinedIcon
                onClick={(e) => deleteFromTrash(e, note)}
              />
            </i>
          )}
        </div>
      </div>
      <div className="color-pallete-wrapper">
        {showColorPallete ? <ColorPallete note={note} /> : null}
      </div>
      <div className="priority-field-wrapper">
        {showPriorityField ? <PriorityField note={note} /> : null}
      </div>
    </div>
  );
};

export { NoteCard };
