import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

class Navigator extends Component {
	state = {
		activeMenu: 'Beranda'
	}

	menu = ['Beranda', 'Kegiatan', 'Foto', 'Video', 'Tentang Kami', 'Tim Kami']

	renderMenu() {
		return this.menu.map(item => (
			<Menu.Item
				name={item}
				link
				active={this.isMenuActive(item)}
				onClick={() => this.changeActiveMenu(item)}
			/>
		))
	}

	changeActiveMenu(menu) {
		this.setState({ activeMenu: menu })
	}

	isMenuActive(menu) {
		return menu === this.state.activeMenu
	}

	render() {
		return (
			<Menu size="massive" borderless>
				<Menu.Item header>
					{/* <Image src={require('./images/logo wri.png')} size="mini" /> */}
					Workshop Riset Informatika
				</Menu.Item>

				<Menu.Menu position="right">{this.renderMenu()}</Menu.Menu>
			</Menu>
		)
	}
}

export default Navigator
