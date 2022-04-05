import "./NoteInput.css";
import { useNotes } from "contexts";
import { ColorLensOutlinedIcon, LabelOutlinedIcon } from "assets/index";
import { ColorPallete, RichTextEditor } from "components";
import { useState } from "react";

const NoteInput = () => {
  const { input, setInput, noteExists, archiveExists, submitForm, closeNote } =
    useNotes();
  const [showColorPallete, setShowColorPallete] = useState(false);

  const buttonDisabled = !input.title && input.content === "<p><br></p>";

  return (
    <div className="form-open">
      <form
        className="form-group note-form"
        onSubmit={submitForm}
        style={{ backgroundColor: input.bgColor }}
      >
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
          <RichTextEditor
            value={input.content}
            setValue={(e) => setInput({ ...input, content: e })}
          />
        </div>

        <div className=" input input-primary">
          <input
            type="text"
            placeholder="Add a label"
            value={input.tags}
            onChange={(e) => setInput({ ...input, tags: [e.target.value] })}
          />
        </div>

        <div className="form-footer">
          <div className="form-options">
            <i
              role="button"
              onClick={() => setShowColorPallete((show) => !show)}
            >
              <ColorLensOutlinedIcon />
            </i>
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
          {showColorPallete ? <ColorPallete setInput={setInput} /> : null}
        </div>
      </form>
    </div>
  );
};

export { NoteInput };
