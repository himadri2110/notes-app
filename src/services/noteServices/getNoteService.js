import axios from "axios";

const getNoteService = (token) => {
  return axios.get("/api/notes", { headers: { authorization: token } });
};

export { getNoteService };
