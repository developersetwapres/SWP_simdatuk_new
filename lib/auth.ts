import Cookies from "js-cookie";

const TOKEN_KEY = "simdatuk_token";

export const auth = {
  setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 1, // 1 hari
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });
  },

  getToken() {
    return Cookies.get(TOKEN_KEY);
  },

  removeToken() {
    Cookies.remove(TOKEN_KEY);
  },

  isAuthenticated() {
    return !!Cookies.get(TOKEN_KEY);
  },
};
