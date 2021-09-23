import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

import RestaurantsList from './modules/restaurantsList/RestaurantsList';
import Login from './modules/login/Login';
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import BaseLayout from "./components/baseLayout/BaseLayout";

function App(props) {

  const {
    userInfo
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {userInfo == null &&
            <Login />
          }
          {userInfo != null &&
            <Redirect
              to={{
                pathname: '/home'
              }}
            />
          }
        </Route>
        <PrivateRoute path="/home">
          <RestaurantsList />
        </PrivateRoute>
        <PrivateRoute path="/management">
          <BaseLayout>
            <div>Pantalla de gestion del restaurante</div>
          </BaseLayout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default connect(
  store => ({
    userInfo: store.login.userInfo,
  }),
  null
)(App);
