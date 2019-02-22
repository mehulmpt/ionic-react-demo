import React, { Component } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp } from '@ionic/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
class App extends Component {
	render() {
		return (
			<IonApp>
				<Router>
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</IonApp>
		)
	}
}

export default App