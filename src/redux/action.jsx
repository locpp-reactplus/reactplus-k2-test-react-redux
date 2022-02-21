import axios from "axios";

export const GetUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://61ecf915f3011500174d2262.mockapi.io/user"
    );
    dispatch({
      type: "GET_USER",
      payload: res.data,
    });
  } catch (error) {
    console.log("loi");
  }
};
export const Add = (list) => async (dispatch) => {
  try {
    const reponse = await axios.post(
      "https://61ecf915f3011500174d2262.mockapi.io/user",
      list
    );

    dispatch({
      type: "ADD_USER",
      payload: reponse.data,
    });
    console.log(reponse.data);
  } catch (error) {
    console.log("loi");
  }
};

export const Delete = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://61ecf915f3011500174d2262.mockapi.io/user/${id}`
    );
    console.log(res.data);
    dispatch({
      type: "DELETE",
      payload: res.data,
    });
  } catch (error) {
    console.log("loi");
  }
};

export const UpDate = (item) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://61ecf915f3011500174d2262.mockapi.io/user/${item.id}`,
      item
    );

    dispatch({
      type: "UPDATE",
      payload: res.data,
    });
  } catch (error) {
    console.log("ok");
  }
};
