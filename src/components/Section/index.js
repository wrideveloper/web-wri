import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import styled from 'styled-components'

const InnerContainer = styled(Grid)`
	padding-top: 60px !important;
	padding-bottom: 60px !important;
`

class Section extends Component {
	static propTypes = {
		blur: PropTypes.number,
		bgImage: PropTypes.string,
		strength: PropTypes.number,
		bordered: PropTypes.bool
	}

	render() {
		console.log(this.props.bgImage)
		return (
			<Parallax
				blur={this.props.blur}
				bgImage={this.props.bgImage}
				strength={this.props.strength}>
				<Container fluid>
					<InnerContainer
						padded
						style={{
							borderTop: this.props.bordered ? 'dashed 2px #a3a3a3' : ''
						}}>
						{this.props.children}
					</InnerContainer>
				</Container>
			</Parallax>
		)
	}
}

export default Section
