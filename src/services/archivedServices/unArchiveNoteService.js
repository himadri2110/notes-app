import axios from "axios";

const unArchiveNoteService = (note, token) => {
  return axios.post(
    `api/archives/restore/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { unArchiveNoteService };
