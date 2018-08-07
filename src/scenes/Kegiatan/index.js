import React, { Component } from 'react'
import { Section } from '../../components'
import { Grid } from 'semantic-ui-react'
import { PenjelasanKomunitas, DaftarKegiatan } from './components'

class Kegiatan extends Component {
	render() {
		return (
			<Section>
				<Grid columns="2" padded>
					<Grid.Column width="7">
						<PenjelasanKomunitas />
					</Grid.Column>
					<Grid.Column width="1" />
					<Grid.Column width="8">
						<DaftarKegiatan />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Kegiatan
