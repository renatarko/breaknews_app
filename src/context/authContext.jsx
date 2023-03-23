import { createContext, useState } from "react";

export const AuthContext = createContext({ token: null, user: null });

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  async function signIn(userLogin) {
    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        const { token, user } = data;

        if (token) {
          alert("Olá " + userLogin.email);

          localStorage.setItem("token", token);
          setToken(token);
          setUser(user);

          console.log(data.message);
        }

        alert("Ops, usuário não encontrado");
      })
      .catch((error) => console.log(error.message));
  }

  function signOut() {
    localStorage.clear(token);
    navigate("/breaknews_app");
  }
  function isAuthenticated() {
    return !!token;
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
