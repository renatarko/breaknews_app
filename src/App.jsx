import { GlobalStyled } from "./GlobalStyled";
import { Home } from "./Pages/Home/index";
import { Profile } from "./Pages/Profile/index";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Empty } from "./Components/Empty";
import { Navbar } from "./Components/Navbar";
import { SignIn } from "./Components/SignIn";
import { AuthProvider } from "./Context/authContext";
import { SearchProvider } from "./Context/searchContext";

function App() {
  return (
    <>
      <Router>
        <GlobalStyled />
        <AuthProvider>
          <SearchProvider>
            <Navbar />
            <Routes>
              <Route path="breaknews_app" Component={Home} />
              {/* <Route path="breaknews_app/profile" Component={Profile} /> */}
              <Route path="breaknews_app/profile/:name" Component={Profile} />
              <Route path="breaknews_app/login" Component={SignIn} />
              {/* <Route path="breaknews_app/search/:search" Component={Search} /> */}
              <Route path="*" element={<Empty />} />
            </Routes>
          </SearchProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
