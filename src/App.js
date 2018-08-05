import React, { Component } from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'

import { Navigation } from './components'
import { Beranda, Kegiatan, Foto } from './scenes'

class App extends Component {
	menu = ['Beranda', 'Kegiatan', 'Foto', 'Video', 'Tentang Kami', 'Tim Kami']

	render() {
		return (
			<div style={styles.container}>
				<Navigation menu={this.menu} />

				<Element id="Beranda">
					<Beranda />
				</Element>

				<Element id="Kegiatan">
					<Kegiatan />
				</Element>

				<Element name="Foto">
					<Foto />
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
