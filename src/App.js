import React, { Component } from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'

import { Navigation } from './components'
import { Beranda, Kegiatan } from './scenes'

class App extends Component {
	menu = ['Beranda', 'Kegiatan', 'Foto', 'Video', 'Tentang Kami', 'Tim Kami']

	render() {
		return (
			<div style={styles.container}>
				<Navigation menu={this.menu} />

				<Element name="Beranda">
					<Beranda />
				</Element>

				<Element name="Kegiatan">
					<Kegiatan />
				</Element>
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
