import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

import Navigation from './components/Navigation'
import Beranda from './scenes/Beranda'

class App extends Component {
	render() {
		return (
			<div style={styles.container}>
				<Navigation />
				<Beranda />
			</div>
		)
	}
}

const styles = {
	container: {
		marginTop: 50
	}
}

export default App
