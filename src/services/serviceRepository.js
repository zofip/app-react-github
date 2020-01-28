import { SLASH, REPOS } from "../util/constants";

export function getValueByUrl(url) {
  return fetch(url, {
    method: "GET"
  });
}

export function getRepositoriesByUser(user) {
  return fetch(process.env.REACT_APP_API_GET_REPOSITORIES + user + SLASH + REPOS, {
    method: "GET"
  });
}