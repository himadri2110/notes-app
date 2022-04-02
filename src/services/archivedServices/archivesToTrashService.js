import axios from "axios";

const archivesToTrashService = (note, token) => {
  return axios.post(
    `/api/archives/trash/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { archivesToTrashService };
