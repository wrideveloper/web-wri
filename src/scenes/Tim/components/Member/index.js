import React, { Component, Fragment } from 'react'
import { Image, Header } from 'semantic-ui-react'
import { Margin } from 'styled-components-spacing'
import styled from 'styled-components'
import Rotate from 'react-reveal/Rotate'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

class Member extends Component {
	static propTypes = {
		photo: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}

	render() {
		return (
			<Fragment>
				<Rotate>
					<Margin bottom={3}>
						<Photo src={this.props.photo} size="small" circular />
					</Margin>
				</Rotate>
				<Fade top>
					<Header inverted>
						{this.props.name}
						<Header.Subheader>{this.props.description}</Header.Subheader>
					</Header>
				</Fade>
			</Fragment>
		)
	}
}

const Photo = styled(Image)`
	border: solid 3px white;
`

export default Member
