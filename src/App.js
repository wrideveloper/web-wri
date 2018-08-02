import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

import Navigation from './components/Navigation'

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<p>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

export default App
