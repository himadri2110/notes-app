import { useNotes } from "contexts";

const FilterModal = () => {
  const { notesOrder, setNotesOrder } = useNotes();

  return (
    <div className="filter-modal">
      <div className="input-group" onClick={(e) => e.stopPropagation()}>
        <p className="text-left">Priority</p>
        <label>
          <input
            type="radio"
            name="priority"
            value="1"
            checked={notesOrder.filter.Low === "1"}
            onChange={(e) => {
              setNotesOrder({ ...notesOrder, filter: { Low: e.target.value } });
            }}
          />
          Low
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="2"
            checked={notesOrder.filter.Medium === "2"}
            onChange={(e) =>
              setNotesOrder({
                ...notesOrder,
                filter: { Medium: e.target.value },
              })
            }
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="priority"
            value="3"
            checked={notesOrder.filter.High === "3"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, filter: { High: e.target.value } })
            }
          />
          High
        </label>
      </div>
    </div>
  );
};

export { FilterModal };
