import "./RichTextEditor.css";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const RichTextEditor = ({ value, setValue }) => {
  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      value={value}
      onChange={setValue}
      placeholder="Take a note..."
    />
  );
};

export { RichTextEditor };
