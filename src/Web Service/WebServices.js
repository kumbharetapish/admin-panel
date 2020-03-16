import Axios from "axios";

 const getResponse = async () => {
  let getData = await Axios.get(
    "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
  )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      alert("Processor failed invalid outputs" + error);
      return Promise.reject({ error });
    });
  return Promise.resolve(getData);
};
export default getResponse;
