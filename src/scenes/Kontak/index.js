import React, { Component } from 'react'
import { Section } from '../../components'
import { Grid } from 'semantic-ui-react'
import { DaftarKontak, DaftarSosmed } from './components'

class Kontak extends Component {
	render() {
		return (
			<Section>
				<Grid columns="2" padded doubling>
					<Grid.Column style={{ borderRight: 'dashed 2px #6D6D6D' }} width="8">
						<DaftarKontak />
					</Grid.Column>
					<Grid.Column width="8">
						<DaftarSosmed />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Kontak
