import React, { Component } from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

import { Navigation } from './components'
import {
	Beranda,
	Kegiatan,
	Event,
	Foto,
	Video,
	Tim,
	Kontak,
	Footer
} from './scenes'

class App extends Component {
	menu = ['Beranda', 'Kegiatan', 'Event', 'Foto', 'Video', 'Tim Kami', 'Kontak']

	scenes = [
		<Beranda />,
		<Kegiatan />,
		<Event />,
		<Foto />,
		<Video />,
		<Tim />,
		<Kontak />
	]

	renderScenes() {
		return this.scenes.map((scene, index) => {
			return (
				<Element id={this.menu[index]} key={index}>
					{scene}
				</Element>
			)
		})
	}

	render() {
		return (
			<div style={styles.container}>
				<Navigation menu={this.menu} />
				{this.renderScenes()}
				<Footer />
			</div>
		)
	}
}

const styles = {
	container: {
		marginTop: 0
	}
}

export default App
