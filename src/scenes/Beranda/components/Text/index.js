import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const fontSize = [16, 25, 35, 50]
const sizeLabel = ['small', 'medium', 'large', 'massive']

class Text extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.oneOf(sizeLabel).isRequired,
    bold: PropTypes.bool
  }

  render() {
    return (
      <Container>
        <TextContainer {...this.props}>{this.props.value}</TextContainer>
      </Container>
    )
  }
}

const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: ${props => (props.size === 'massive' ? 30 : 15)}px;
  display: inline-block;
  font-size: ${props => fontSize[sizeLabel.indexOf(props.size)]}px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`

const Container = styled.div`
  margin-bottom: 15px;
`

export default Text
