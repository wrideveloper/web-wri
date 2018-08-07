import React, { Component } from 'react'
import { Menu, Image, Grid } from 'semantic-ui-react'
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

	changeActiveMenu(menu) {
		this.setState({ activeMenu: menu })
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

	renderMenu() {
		return this.props.menu.map((item, index) => (
			<Menu.Item
				key={index}
				name={item}
				link
				active={this.isMenuActive(item)}
				onClick={() => this.scrollTo(item)}
			/>
		))
	}

	render() {
		return (
			<Grid columns="1">
				<Grid.Column only="computer">
					<TransparentMenu
						size="massive"
						borderless
						fixed="top"
						inverted
						transparent={this.state.isMenuTransparent}
						stackable>
						<Menu.Item header>
							<Logo src={require('./images/logo wri.png')} size="mini" />
							Workshop Riset Informatika
						</Menu.Item>
						<Menu.Menu position="right">{this.renderMenu()}</Menu.Menu>
					</TransparentMenu>
				</Grid.Column>
			</Grid>
		)
	}
}

export default Navigator
