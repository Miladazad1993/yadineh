import { fetchDataService } from "../../Services/UserServices";

export const FetchDataAction = (fetchData) => {
  return async dispatch => {
    const { data } = await fetchDataService(fetchData);
    await dispatch({ type: "GET_FETCH_DATA", payload: data });
  };
};