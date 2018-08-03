import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const Logo = styled(Image)`
	margin-right: 15px;
`

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
			<Menu size="massive" borderless fixed="top" color="orange">
				<Menu.Item header>
					<Logo src={require('./images/logo wri.png')} size="mini" />
					Workshop Riset Informatika
				</Menu.Item>
				<Menu.Menu position="right">{this.renderMenu()}</Menu.Menu>
			</Menu>
		)
	}
}

export default Navigator
