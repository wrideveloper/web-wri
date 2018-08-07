import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { scroller } from 'react-scroll'
import styled from 'styled-components'

const TransparentMenu = styled(Menu)`
	background-color: ${props =>
		props.transparent ? 'rgba(0, 0, 0, 0) !important' : ''};
	transition: all 0.3s;
`

const Logo = styled(Image)`
	margin-right: 15px;
`

class Navigator extends Component {
	state = {
		activeMenu: 'Beranda',
		isMenuTransparent: true
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll')
	}

	handleScroll = event => {
		const scrollPosition = window.scrollY
		this.setMenuTransparency(scrollPosition)
		this.setActiveMenuOnScroll(scrollPosition)
	}

	setMenuTransparency(scrollPosition) {
		this.setState({
			isMenuTransparent: scrollPosition > 60 ? false : true
		})
	}

	setActiveMenuOnScroll(scrollPosition) {
		console.log(scrollPosition)
		this.props.scenePositions.forEach((position, index) => {
			if (position <= scrollPosition)
				this.changeActiveMenu(this.props.menu[index])
		})
	}

	scrollTo(element) {
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOut',
			offset: -74
		})
	}

	isMenuActive(menu) {
		return menu === this.state.activeMenu
	}

	changeActiveMenu(menu) {
		this.setState({ activeMenu: menu })
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
					this.scrollTo(item)
				}}
			/>
		))
	}

	render() {
		return (
			<TransparentMenu
				size="massive"
				borderless
				fixed="top"
				inverted
				transparent={this.state.isMenuTransparent}>
				<Menu.Item header onClick={() => this.scrollToTop()}>
					<Logo src={require('./images/logo wri.png')} size="mini" />
					Workshop Riset Informatika
				</Menu.Item>
				<Menu.Menu position="right">{this.renderMenu()}</Menu.Menu>
			</TransparentMenu>
		)
	}
}

export default Navigator
