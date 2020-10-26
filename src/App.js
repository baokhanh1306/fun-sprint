import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Signup} />
			</Switch>
		</Router>
	);
};

export default App;
