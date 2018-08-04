import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { scroller, animateScroll } from 'react-scroll'
import styled from 'styled-components'

const Logo = styled(Image)`
	margin-right: 15px;
`

class Navigator extends Component {
	state = {
		activeMenu: 'Beranda'
	}

	renderMenu() {
		return this.props.menu.map((item, index) => (
			<Menu.Item
				key={index}
				name={item}
				link
				active={this.isMenuActive(item)}
				onClick={() => {
					this.changeActiveMenu(item)
					this.handleScroll(index)
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

	handleScroll(index) {
		if (index === 0) this.scrollToTop()
		else this.scrollTo(this.props.menu[index])
	}

	scrollToTop() {
		animateScroll.scrollToTop()
	}

	scrollTo(element) {
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOut'
		})
	}

	render() {
		return (
			<Menu size="massive" borderless fixed="top" inverted>
				<Menu.Item header onClick={() => this.scrollToTop()}>
					<Logo src={require('./images/logo wri.png')} size="mini" />
					Workshop Riset Informatika
				</Menu.Item>
				<Menu.Menu position="right">{this.renderMenu()}</Menu.Menu>
			</Menu>
		)
	}
}

export default Navigator
