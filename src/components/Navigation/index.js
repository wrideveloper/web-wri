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
	}

	setMenuTransparency(scrollPosition) {
		this.setState({
			isMenuTransparent: scrollPosition > 60 ? false : true
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

	renderMenu() {
		return this.props.menu.map((item, index) => (
			<Menu.Item
				key={index}
				name={item}
				link
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
							<Logo src={require('./images/logo.png')} size="mini" />
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
