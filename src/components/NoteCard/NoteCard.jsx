import "./NoteCard.css";
import { useState } from "react";
import {
  ColorLensOutlinedIcon,
  ArchiveOutlinedIcon,
  UnarchiveOutlinedIcon,
  DeleteOutlinedIcon,
  PushPinIcon,
  PushPinOutlinedIcon,
} from "assets/index";
import { useArchive, useNotes } from "contexts";

const NoteCard = ({ note }) => {
  const { _id, title, content, tags, createdTime } = note;
  const [showCardOptions, setShowCardOptions] = useState(false);
  const {
    noteState: { archives },
    setShowInput,
    setInput,
  } = useNotes();

  const { archiveNote, unArchiveNote } = useArchive();

  const inArchive = archives?.find((eachNote) => eachNote._id === note._id);

  const changeBg = (e) => {
    e.stopPropagation();
  };

  const editNote = () => {
    setShowInput(true);
    setInput(note);
  };

  return (
    <div
      key={_id}
      className="card-wrapper card-w-badge note-card"
      onMouseOver={() => setShowCardOptions((show) => !show)}
      onMouseOut={() => setShowCardOptions((show) => !show)}
      onClick={editNote}
    >
      <div className="card-body">
        <div className="card-text">
          <div className="card-heading">{title}</div>
          <div className="card-content">{content}</div>
          {tags && <div className="card-label">{tags[0]} </div>}
        </div>

        <div className="card-badge">
          <i
            role="button"
            style={{ visibility: showCardOptions ? "visible" : "hidden" }}
          >
            <PushPinOutlinedIcon />
          </i>
        </div>
      </div>

      <div
        className="card-action"
        style={{ visibility: showCardOptions ? "visible" : "hidden" }}
      >
        <div className="card-time">{createdTime}</div>

        <div className="card-icons">
          <i role="button" onClick={changeBg}>
            <ColorLensOutlinedIcon />
          </i>
          <i role="button">
            {inArchive ? (
              <UnarchiveOutlinedIcon onClick={(e) => unArchiveNote(e, note)} />
            ) : (
              <ArchiveOutlinedIcon onClick={(e) => archiveNote(e, note)} />
            )}
          </i>
          <i role="button">
            <DeleteOutlinedIcon />
          </i>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
