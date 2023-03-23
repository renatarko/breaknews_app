import { GlobalStyled } from "./GlobalStyled";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./Pages/Profile/Profile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./context/modalContext";

function App() {
  return (
    <>
      <Router>
        <GlobalStyled />

        <Navbar buttonType="userLogout" />
        <ModalProvider>
          <Routes>
            <Route path="breaknews_app" Component={Home} />
            {/* <Route path="breaknews_app/profile" Component={Profile} /> */}
            <Route path="breaknews_app/profile/:id" Component={Profile} />
            <Route path="*" element={<h1>Pagina não encontrada</h1>} />
          </Routes>
        </ModalProvider>
      </Router>
    </>
  );
}

export default App;
