import axios from "axios";

const editArchiveService = (note, token) => {
  return axios.post(
    `/api/archives/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { editArchiveService };
