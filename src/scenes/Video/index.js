import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Section } from '../../components'
import { Info, Players } from './components'

class Video extends Component {
	render() {
		return (
			<Section>
				<Grid columns="2" doubling relaxed="very">
					<Grid.Column width="5" style={{ borderRight: 'dashed 2px #a3a3a3' }}>
						<Info />
					</Grid.Column>
					<Grid.Column width="11">
						<Players />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Video
