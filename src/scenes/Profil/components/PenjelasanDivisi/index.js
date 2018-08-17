import React, { Component, Fragment } from 'react'
import Carousel from 'react-owl-carousel2'
import Divisi from '../Divisi'

class PenjelasanDivisi extends Component {
	carouselOptions = {
		items: 1,
		rewind: true,
		autoplay: true,
		margin: 0
	}

	divisi = [
		{
			name: 'Pemrograman',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: require('../../images/pemograman.png'),
			subdivisi: [
				{ name: 'Pengembangan Web', icon: 'globe' },
				{ name: 'Aplikasi Mobile', icon: 'mobile alternate' },
				{ name: 'Pengembangan Game', icon: 'game' }
			]
		},
		{
			name: 'Multimedia',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: require('../../images/multimedia.png'),
			subdivisi: [
				{ name: 'Desain UI', icon: 'list layout' },
				{ name: 'Desain 3D', icon: 'box' },
				{ name: 'Aset Game', icon: 'game' }
			]
		},
		{
			name: 'Networking',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			image: require('../../images/network.png'),
			subdivisi: [
				{ name: 'Internet of Thing', icon: 'wifi' },
				{ name: 'Raspberry', icon: 'microchip' },
				{ name: 'Linux', icon: 'linux' }
			]
		}
	]

	renderItem() {
		return this.divisi.map((item, index) => (
			<Divisi
				key={index}
				image={item.image}
				name={item.name}
				description={item.description}
				subdivisi={item.subdivisi}
			/>
		))
	}

	render() {
		return (
			<Fragment>
				<Carousel options={this.carouselOptions}>{this.renderItem()}</Carousel>
			</Fragment>
		)
	}
}

export default PenjelasanDivisi
