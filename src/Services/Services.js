import Axios from "axios";

const DEFAULT_API = "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json";

const getResponse = async () => {
  let getData = await Axios.get(DEFAULT_API)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Processor failed invalid outputs", error);
      return Promise.reject({ error });
    });
  return Promise.resolve(getData);
};

export default getResponse;
