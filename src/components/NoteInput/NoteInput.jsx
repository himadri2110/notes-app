import "./NoteInput.css";
import { useNotes } from "../../contexts";
import { ColorLensOutlinedIcon, LabelOutlinedIcon } from "assets/index";

const NoteInput = () => {
  const { input, setInput, noteExists, archiveExists, submitForm, closeNote } =
    useNotes();

  const buttonDisabled = !input.title && !input.content;

  return (
    <div className="form-open">
      <form className="form-group note-form" onSubmit={submitForm}>
        <div className=" input input-primary">
          <input
            type="text"
            placeholder="Title"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
            autoFocus
          />
        </div>

        <div className=" input input-primary">
          <textarea
            type="text"
            placeholder="Take a note..."
            value={input.content}
            onChange={(e) => setInput({ ...input, content: e.target.value })}
          />
        </div>

        <div className="form-options">
          <i role="button">
            <ColorLensOutlinedIcon />
          </i>
          <div className=" input input-primary">
            <input
              type="text"
              placeholder="Add a label"
              value={input.tags}
              onChange={(e) => setInput({ ...input, tags: [e.target.value] })}
            />
          </div>
        </div>

        <div className="form-action">
          <button type="button" className="close-btn" onClick={closeNote}>
            Cancel
          </button>
          <button
            type="submit"
            className={`btn btn-primary ${
              buttonDisabled ? "primary-disabled" : null
            }`}
            style={{
              cursor: buttonDisabled ? "not-allowed" : "pointer",
            }}
            disabled={buttonDisabled}
          >
            {noteExists || archiveExists ? "Save" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export { NoteInput };
