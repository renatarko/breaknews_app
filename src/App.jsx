import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { SearchProvider } from "./Context/searchContext";
import { GlobalStyled } from "./GlobalStyled";
import { Home } from "./Pages/Home/index";
import { Login } from "./Pages/Login/index";
import { Profile } from "./Pages/Profile/index";
import { Search } from "./Pages/Search";
import { SignUp } from "./Pages/SignUp";

import { Empty } from "./Components/Empty";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <GlobalStyled />
        <AuthProvider>
          <SearchProvider>
            <Navbar />
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/profile" Component={Profile} />
              <Route path="/login" Component={Login} />
              <Route path="/sign-up" Component={SignUp} />
              <Route path="/search" Component={Search} />
              <Route path="*" element={<Empty />} />
            </Routes>
          </SearchProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
