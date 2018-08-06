import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Section } from '../../components'
import { Info, Players } from './components'

class Video extends Component {
	state = {}
	render() {
		return (
			<Section>
				<Grid columns="2">
					<Grid.Column width="10">
						<Players />
					</Grid.Column>
					<Grid.Column width="6">
						<Info />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Video
