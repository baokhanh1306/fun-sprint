import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './components';
import BoardPage from './pages/Board';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import history from './utils/history';

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<PublicRoute exact path="/" component={Welcome} restricted />
				<PublicRoute exact path="/login" component={Login} restricted/>
				<PublicRoute exact path="/register" component={Signup} restricted/>
				<PrivateRoute exact path="/boards/:id" component={BoardPage} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
};

export default App;
