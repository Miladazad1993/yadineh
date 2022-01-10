import { ChechStatusService } from "../../Services/UserServices";

export const CheckStatusAction = (qrCodeUser) => {
  return async dispatch => {
    const { data } = await ChechStatusService(qrCodeUser);
    await dispatch({ type: "GET_STATUS", payload: data });
  };
};