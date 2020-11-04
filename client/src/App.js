import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import BoardPage from './pages/Board';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import history from './utils/history';

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Signup} />
				<Route exact path="/boards/:id" component={BoardPage} />
			</Switch>
		</Router>
	);
};

export default App;
