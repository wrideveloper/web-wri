import React, { Component } from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

import { Navigation } from './components'
import { Beranda, Kegiatan, Event, Foto, Video } from './scenes'

class App extends Component {
	menu = [
		'Beranda',
		'Kegiatan',
		'Event',
		'Foto',
		'Video',
		'Tentang Kami',
		'Tim Kami'
	]

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

				<Element id="Event">
					<Event />
				</Element>

				<Element id="Foto">
					<Foto />
				</Element>

				<Element id="Video">
					<Video />
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
