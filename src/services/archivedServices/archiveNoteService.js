import axios from "axios";

const archiveNoteService = (note, token) => {
  return axios.post(
    `/api/notes/archives/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { archiveNoteService };
