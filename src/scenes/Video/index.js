import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Section } from '../../components'
import { Info, Players } from './components'

class Video extends Component {
	state = {}
	render() {
		return (
			<Section fluid>
				<Grid columns="2" divided verticalAlign="middle">
					<Grid.Column width="11">
						<Players />
					</Grid.Column>
					<Grid.Column width="5">
						<Info />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Video
