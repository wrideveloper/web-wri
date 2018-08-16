import React, { Component } from 'react'
import { Section } from '../../components'
import { Grid } from 'semantic-ui-react'
import { PenjelasanKomunitas, DaftarKegiatan } from './components'

class Profil extends Component {
	render() {
		return (
			<Section>
				<Grid columns="2" relaxed="very" doubling>
					<Grid.Column width="8">
						<PenjelasanKomunitas />
					</Grid.Column>
					<Grid.Column width="8">
						<DaftarKegiatan />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Profil
