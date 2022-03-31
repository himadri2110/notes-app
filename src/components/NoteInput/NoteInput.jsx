import { useNotes } from "../../contexts";
import "./NoteInput.css";

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
            onChange={(e) =>
              setInput({ ...input, title: e.target.value.trim() })
            }
            autoFocus
          />
        </div>

        <div className=" input input-primary">
          <textarea
            type="text"
            placeholder="Take a note..."
            value={input.content}
            onChange={(e) =>
              setInput({ ...input, content: e.target.value.trim() })
            }
          />
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
