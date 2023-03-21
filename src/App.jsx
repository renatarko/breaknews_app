import "./App.css";
import { Home } from "./Pages/Home/Home";
import { GlobalStyled } from "./GlobalStyled";
import { Profile } from "./Pages/Profile/Profile";
import { NewNews } from "./components/NewNews/NewNews";
import { EditNews } from "./components/EditNews/EditNews";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { SignIn } from "./components/SignIn/SignIn";

function App() {
  return (
    <>
      <Router>
        <GlobalStyled />

        <Navbar buttonType="userLogout" />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />
          <Route path="/profile/:id" Component={Profile} />
          <Route path="/sign" Component={SignIn} />
          <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
