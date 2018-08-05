import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Header, Icon } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

class SectionTitle extends Component {
	static propTypes = {
		image: PropTypes.string,
		icon: PropTypes.string,
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		inverted: PropTypes.bool
	}

	render() {
		console.log('inverted ? ', this.props.inverted)
		return (
			<Fragment>
				<Header size="huge" color="orange" inverted={this.props.inverted}>
					<Icon name={this.props.icon} circular />

					<Header.Content>
						<Zoom>
							{this.props.title}
							<Header.Subheader>{this.props.description}</Header.Subheader>
						</Zoom>
					</Header.Content>
				</Header>
				<br />
			</Fragment>
		)
	}
}

export default SectionTitle
