import "./NoteCard.css";
import {
  ColorLensOutlinedIcon,
  LabelOutlinedIcon,
  ArchiveOutlinedIcon,
} from "assets/index";

const NoteCard = ({ note }) => {
  const { _id, title, content, createdTime } = note;

  return (
    <div key={_id} className="card-wrapper card-w-badge note-card">
      <div>
        <div className="card-heading">{title}</div>
      </div>

      <div className="card-content">{content}</div>

      <div className="card-time">{createdTime}</div>

      <div className="card-action">
        <button type="button">
          <span>
            <ColorLensOutlinedIcon />
          </span>
        </button>
        <button type="button">
          <span>
            <LabelOutlinedIcon />
          </span>
        </button>
        <button type="button">
          <span>
            <ArchiveOutlinedIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export { NoteCard };
