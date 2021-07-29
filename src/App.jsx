import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { authContext } from "./context/AuthContext";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { PlaylistPage } from "./pages/PlaylistPage";
import { AlbumPage } from "./pages/AlbumPage";
import { Layout } from "./components/Layout";

function App() {
  const { accessToken } = useContext(authContext);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={accessToken ? Home : Login} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={accessToken ? SearchPage : Login} />
          <Route
            path="/playlist/:id"
            component={accessToken ? PlaylistPage : Login}
          />
          <Route
            path="/album/:albumId"
            component={accessToken ? AlbumPage : Login}
          />
          <Route path="/login" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
