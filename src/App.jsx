import { useContext, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { authContext } from "./context/AuthContext";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";

const AlbumPage = lazy(() => import("./pages/AlbumPage"));
const PlaylistPage = lazy(() => import("./pages/PlaylistPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));

function App() {
  const { accessToken } = useContext(authContext);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<span>Loading</span>}>
          <Switch>
            <Route exact path="/" component={accessToken ? Home : Login} />
            <Route path="/home" component={Home} />
            <Route
              path="/search"
              component={accessToken ? SearchPage : Login}
            />
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
