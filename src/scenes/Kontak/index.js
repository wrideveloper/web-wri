import React, { Component } from 'react'
import { Section } from '../../components'
import { Grid } from 'semantic-ui-react'
import { DaftarKontak, DaftarSosmed } from './components'

class Kontak extends Component {
	render() {
		return (
			<Section>
				<Grid columns="3" padded>
					<Grid.Column style={{ borderRight: 'dashed 2px #6D6D6D' }} width="7">
						<DaftarKontak />
					</Grid.Column>
					<Grid.Column width="1" />
					<Grid.Column width="7">
						<DaftarSosmed />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Kontak
