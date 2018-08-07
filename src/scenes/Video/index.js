import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Section } from '../../components'
import { Info, Players } from './components'

class Video extends Component {
	state = {}
	render() {
		return (
			<Section fluid>
				<Grid columns="2" divided verticalAlign="middle" doubling reversed>
					<Grid.Column width="9">
						<Players />
					</Grid.Column>
					<Grid.Column width="7">
						<Info />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Video
