import { NoteList } from "components/NoteList/NoteList";
import { NoteInput } from "components/";

const Home = () => {
  return (
    <div className="component-container">
      <NoteInput />
      <NoteList />
    </div>
  );
};

export { Home };
