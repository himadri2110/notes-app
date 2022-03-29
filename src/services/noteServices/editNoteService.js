import axios from "axios";

const editNoteService = (note, token) => {
  return axios.post(
    `/api/notes/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { editNoteService };
