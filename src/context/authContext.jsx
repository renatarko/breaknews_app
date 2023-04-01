import { createContext, useContext, useState } from "react";
import { ApiRoute } from "../config/routes";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  async function signIn(userLogin) {
    try {
      const response = await fetcher({
        url: ApiRoute.auth,
        method: "POST",
        body: userLogin,
        needToken: false,
      });
      const data = await response.json();

      const { token: _token, user: _user } = data;

      if (_token) {
        alert("Olá " + _user.email);

        localStorage.setItem("token", _token);
        setToken(() => _token);
        setUser(() => _user);

        return _user;
      }

      throw new Error("Ops, usuário não encontrado");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  function signOut() {
    localStorage.clear(token);
    navigate("/breaknews_app");
  }
  function isAuthenticated() {
    return !!token;
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isAuthenticated, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
