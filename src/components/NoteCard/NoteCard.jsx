import "./NoteCard.css";
import { useState } from "react";
import {
  ColorLensOutlinedIcon,
  LabelOutlinedIcon,
  ArchiveOutlinedIcon,
  DeleteOutlinedIcon,
  PushPinIcon,
  PushPinOutlinedIcon,
} from "assets/index";
import { useNotes } from "contexts";

const NoteCard = ({ note }) => {
  const { _id, title, content, createdTime } = note;
  const [showCardOptions, setShowCardOptions] = useState(false);
  const { setShowInput, setInput, deleteNote } = useNotes();

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
            <LabelOutlinedIcon />
          </i>
          <i role="button">
            <ArchiveOutlinedIcon />
          </i>
          <i role="button" onClick={(e) => deleteNote(e, _id)}>
            <DeleteOutlinedIcon />
          </i>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
