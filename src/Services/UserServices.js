import config from "./Config.json";
import http from "./httpService";

export const ChechStatusService = qrCodeUser => {
   return http.post(`${config.yadineapi}${config.checkStatus}`, JSON.stringify(qrCodeUser))
}

export const fetchDataService = fetchData => {
   return http.post(`${config.yadineapi}${config.fetchData}`, JSON.stringify(fetchData))
}



