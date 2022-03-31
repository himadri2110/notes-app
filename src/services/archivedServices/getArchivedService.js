import axios from "axios";

const getArchivedService = (token) => {
  return axios.get("/api/archives", { headers: { authorization: token } });
};

export { getArchivedService };
