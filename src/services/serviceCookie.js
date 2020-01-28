import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function saveCookie(name, value) {
  cookies.set(name, value, { path: '/' });
}

export function getCookie(name) {
  return cookies.get(name);
}