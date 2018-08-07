import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'
import styled from 'styled-components'

const OuterContainer = styled(Container)`
	background-color: ${props =>
		props.bgImage === undefined ? '' : 'rgba(0, 0, 0, 0.6)'};
`

const InnerContainer = styled(Container)`
	padding: ${props => (props.fluid ? 30 : 0)}px;
	padding-top: 50px;
	padding-bottom: 50px;
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
		return (
			<Parallax
				blur={this.props.blur}
				bgImage={this.props.bgImage}
				strength={this.props.strength}>
				<OuterContainer fluid bgImage={this.props.bgImage}>
					<InnerContainer
						bordered={this.props.bordered}
						fluid={this.props.fluid}>
						{this.props.children}
					</InnerContainer>
				</OuterContainer>
			</Parallax>
		)
	}
}

export default Section
