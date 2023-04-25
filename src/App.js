import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home/> */}
      {/* <Profile/> */}
      {/* <Login/> */}
      {/* <Register/> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
