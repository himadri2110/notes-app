import axios from "axios";

const deleteFromTrashService = (note, token) => {
  return axios.delete(`/api/trash/delete/${note._id}`, {
    headers: { authorization: token },
  });
};

export { deleteFromTrashService };
