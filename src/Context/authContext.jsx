import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserService } from "../Services/userServices";

const routeAuth = "https://api-breaknews-8891.onrender.com";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [messageError, setMessageError] = useState();

  const navigate = useNavigate();

  // pegar o token do localstorage
  // se tiver token, pegar os dados do usuário na api
  // se não tiver token, redirecionar para a rota de login

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("localStorage"));
    const id = user?.id;

    if (user?.token) {
      const getUser = async () => {
        try {
          const response = await getUserService(id);
          const user = await response.json();
          setUser(user);
        } catch (error) {
          console.log(error.message);
        }
      };
      getUser();
    }

    if (!user?.token) {
      return navigate("/breaknews_app/login");
    }
  }, []);

  async function signIn(userLogin) {
    try {
      const response = await fetch(`${routeAuth}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });

      const data = await response.json();
      const { token: _token, user: _user } = data;

      const _localStorage = {
        token: _token,
        id: _user.id,
      };

      const _localStorageString = JSON.stringify(_localStorage);

      if (_token) {
        localStorage.setItem("localStorage", _localStorageString);
        setToken(() => _token);
        setUser(() => _user);

        return _user;
      }

      if (!user) {
        setMessageError("erro");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function signOut() {
    localStorage.clear(token);
    return navigate("/breaknews_app");
  }

  function isAuthenticated() {
    return !!token;
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isAuthenticated,
        user,
        token,
        messageError,
      }}
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
