import axios from "axios";

const moveToTrashService = (note, token) => {
  return axios.post(
    `/api/notes/trash/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { moveToTrashService };
