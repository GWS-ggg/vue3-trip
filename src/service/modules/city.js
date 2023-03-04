import gwsRequest from "../request";

export function getCityAll() {
  return gwsRequest.get({
    url: "/city/all",
  });
}
