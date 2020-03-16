import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from "./action/action";

const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch("https://exampleapi.com/productshttps://exampleapi.com/products")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        console.log(res.products);

        dispatch(fetchProductsSuccess(res.dasbhoardPage.notifications ));
        return res.dasbhoardPage;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
};

export default fetchProducts;
