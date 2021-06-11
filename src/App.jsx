import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";

import { authContext } from "./context/AuthContext";

function App() {
  const { accessToken } = useContext(authContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={accessToken ? Home : Login} />
        <Route path="/home" component={Home} />
        <Route path="/search" component={accessToken ? SearchPage : Login} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
