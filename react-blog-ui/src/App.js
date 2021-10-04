import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Blogpage from "./pages/Blogpage";
import Updatepage from "./pages/Updatepage";
import Post from "./components/Post";
import Newpostpage from "./pages/Newpostpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Loginpage} />
        <Route path="/register" exact component={Registerpage} />
        <Route path="/blog" exact component={Blogpage} />
        <Route path="/update" exact component={Updatepage} />
        <Route path="/post" exact component={Newpostpage} />
      </div>
    </Router>
  );
};

export default App;
