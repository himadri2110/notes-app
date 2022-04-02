import axios from "axios";

const restoreFromTrashService = (note, token) => {
  return axios.post(
    `/api/trash/restore/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { restoreFromTrashService };
