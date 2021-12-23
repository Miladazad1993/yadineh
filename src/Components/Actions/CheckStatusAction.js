import { ChechStatusService } from "../../Services/UserServices";

export const CheckStatusAction = (qrCodeUser) => {
  // console.log("qrCode Action => ", qrCodeUser);
  return async dispatch => {
    const { data } = await ChechStatusService(qrCodeUser);
    // console.log("data action => " , data);
    await dispatch({ type: "GET_STATUS", payload: data });
  };
};