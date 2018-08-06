import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Container } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import styled from 'styled-components'

const InnerContainer = styled(Container)`
	padding: ${props => (props.fluid ? 30 : 0)}px;
	padding-top: 60px !important;
	padding-bottom: 60px !important;
	border-top: ${props =>
		props.bordered ? 'dashed 2px #a3a3a3 !important' : ''};
`

class Section extends Component {
	static propTypes = {
		blur: PropTypes.number,
		bgImage: PropTypes.string,
		strength: PropTypes.number,
		bordered: PropTypes.bool,
		fluid: PropTypes.bool
	}

	render() {
		console.log(this.props.bgImage)
		return (
			<Parallax
				blur={this.props.blur}
				bgImage={this.props.bgImage}
				strength={this.props.strength}>
				<InnerContainer bordered={this.props.bordered} fluid={this.props.fluid}>
					{this.props.children}
				</InnerContainer>
			</Parallax>
		)
	}
}

export default Section
