import { useNotes } from "contexts";

const SortModal = () => {
  const { notesOrder, setNotesOrder } = useNotes();

  return (
    <div className="sort-modal">
      <div className="input-group" onClick={(e) => e.stopPropagation()}>
        <p className="text-left">Date</p>
        <label>
          <input
            type="radio"
            name="sort-date"
            value="latest"
            checked={notesOrder.sort === "latest"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          Latest first
        </label>
        <label>
          <input
            type="radio"
            name="sort-date"
            value="oldest"
            checked={notesOrder.sort === "oldest"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          Oldest first
        </label>
        <p className="text-left">Priority</p>
        <label>
          <input
            type="radio"
            name="sort-priority"
            value="lowToHigh"
            checked={notesOrder.sort === "lowToHigh"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort-priority"
            value="highToLow"
            checked={notesOrder.sort === "highToLow"}
            onChange={(e) =>
              setNotesOrder({ ...notesOrder, sort: e.target.value })
            }
          />
          High to Low
        </label>
      </div>
    </div>
  );
};

export { SortModal };
