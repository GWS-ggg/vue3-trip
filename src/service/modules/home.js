import gwsRequest from "../request";

export function getHotSuggestsData() {
  return gwsRequest.get({
    url: "/home/hotSuggests",
  });
}
