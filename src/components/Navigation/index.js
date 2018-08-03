import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { scroller } from 'react-scroll'
import styled from 'styled-components'

const Logo = styled(Image)`
	margin-right: 15px;
`

class Navigator extends Component {
	state = {
		activeMenu: 'Beranda'
	}

	renderMenu() {
		return this.props.menu.map(item => (
			<Menu.Item
				name={item}
				link
				active={this.isMenuActive(item)}
				onClick={() => {
					this.changeActiveMenu(item)
					this.scrollTo(item)
				}}
			/>
		))
	}

	isMenuActive(menu) {
		return menu === this.state.activeMenu
	}

	changeActiveMenu(menu) {
		this.setState({ activeMenu: menu })
	}

	scrollTo(element) {
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
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
