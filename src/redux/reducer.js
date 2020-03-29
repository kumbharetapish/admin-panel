const initialState = {
  status:
    localStorage.getItem("loginStatus") === null
      ? false
      : Boolean(localStorage.getItem("loginStatus")),
  userName: localStorage.getItem("userName")
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN_STATUS") {
    const updateStatus = !state.status;
    localStorage.setItem("loginStatus", updateStatus);
    return {
      ...state,
      status: updateStatus,
      userName: action.username
    };
  }

  return { ...state };
};

export default reducer;
