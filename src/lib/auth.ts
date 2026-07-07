import Cookies from "js-cookie";

const TOKEN_KEY = "simdatuk_token";

export const auth = {
  setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 1,
      path: "/", // <-- Tambahkan ini
      sameSite: "Lax", // <-- Ganti dari Strict
      secure: process.env.NODE_ENV === "production",
    });
  },

  getToken() {
    return Cookies.get(TOKEN_KEY);
  },

  removeToken() {
    Cookies.remove(TOKEN_KEY, {
      path: "/",
    });
  },

  isAuthenticated() {
    return !!Cookies.get(TOKEN_KEY);
  },
};
