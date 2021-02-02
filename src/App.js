import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import PageMain from "./pages/PageMain/PageMain";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [dadosDaPagina, setDadosDaPagina] = useState({
    bc: "blue"
  });

  const teste = () => {
    alert('chegou!');
  }

  return (
    <AuthProvider>
      <Router>
        <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/:sitename" component={PageMain} handleAppear={ () => teste } />
        </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;