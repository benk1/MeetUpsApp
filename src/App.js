import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetUps from './components/pages/AllMeetUps';
import Favorites from './components/pages/Favorites';
import NewMeetUp from './components/pages/NewMeetUp';
import NotFound from './components/pages/NotFound';
function App() {
	return (
		<div>
			<Switch>
				<MainNavigation />
				<Route exact path="/" component={AllMeetUps} />
				<Route path="/new-meetup" component={NewMeetUp} />
				<Route path="/favorites" component={Favorites} />
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</div>
	);
}

export default App;
