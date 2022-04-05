import "./ColorPallete.css";
import { useNotes } from "contexts";

const colorData = [
  {
    id: 1,
    color: "#f3f3f3",
  },
  {
    id: 2,
    color: "#ccedfa",
  },
  {
    id: 3,
    color: "#bafbba",
  },
  {
    id: 4,
    color: "#ffffbe",
  },
  {
    id: 5,
    color: "#fed4da",
  },
];

const ColorPallete = ({ note, setInput }) => {
  const { input, isEditing, updateColorHandler } = useNotes();

  return (
    <div className="color-pallete">
      {colorData.map((colors) => (
        <button
          key={colors.id}
          type="button"
          className="btn btn-color"
          style={{ backgroundColor: colors.color }}
          onClick={(e) => {
            e.stopPropagation();
            isEditing
              ? setInput({ ...input, bgColor: colors.color })
              : updateColorHandler({ ...note, bgColor: colors.color });
          }}
        ></button>
      ))}
    </div>
  );
};

export { ColorPallete };
