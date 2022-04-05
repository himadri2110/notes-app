import "./PriorityField.css";
import { useNotes } from "contexts";

const PriorityField = ({ note }) => {
  const { input, setInput, updateNoteHandler, isEditing } = useNotes();

  const handlePriority = (priority) => {
    isEditing
      ? setInput({ ...input, priority: priority })
      : updateNoteHandler({ ...note, priority: priority });
  };

  return (
    <div
      className="priority-field input-group"
      onClick={(e) => e.stopPropagation()}
    >
      <label>
        <input
          type="radio"
          name="priority"
          checked={input.priority === "low"}
          onChange={() => handlePriority("low")}
        />{" "}
        Low
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          checked={input.priority === "medium"}
          onChange={() => handlePriority("medium")}
        />{" "}
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          checked={input.priority === "high"}
          onChange={() => handlePriority("high")}
        />{" "}
        High
      </label>
    </div>
  );
};

export { PriorityField };
