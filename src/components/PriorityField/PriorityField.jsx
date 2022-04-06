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
          value="1"
          checked={
            note ? note.priority.Low === "1" : input.priority.Low === "1"
          }
          onChange={(e) => handlePriority({ Low: e.target.value })}
        />{" "}
        Low
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value="2"
          checked={
            note ? note.priority.Medium === "2" : input.priority.Medium === "2"
          }
          onChange={(e) => handlePriority({ Medium: e.target.value })}
        />{" "}
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value="3"
          checked={
            note ? note.priority.High === "3" : input.priority.High === "3"
          }
          onChange={(e) => handlePriority({ High: e.target.value })}
        />{" "}
        High
      </label>
    </div>
  );
};

export { PriorityField };
