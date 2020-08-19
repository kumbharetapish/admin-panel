let CACHE_NAME = "admin panel";

const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  if (swUrl) {
    navigator.serviceWorker
      .register(swUrl)
      .then((results) => {
        console.warn("results", results);
      })
      .catch((error) => {
        console.warn("error", error);
      });
  }
};
export default swDev;
