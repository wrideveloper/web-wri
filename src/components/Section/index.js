import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'

class Section extends Component {
	static propTypes = {
		blur: PropTypes.number,
		bgImage: PropTypes.symbol,
		strength: PropTypes.number
	}

	render() {
		return (
			<Parallax
				blur={this.props.blur}
				bgImage={this.props.bgImage}
				strength={this.props.strength}>
				<Container fluid>
					<Grid padded>{this.props.children}</Grid>
				</Container>
			</Parallax>
		)
	}
}

export default Section
