import React, { Component } from 'react'
import { Section } from '../../components'
import { Grid } from 'semantic-ui-react'
import { DaftarKontak, DaftarSosmed } from './components'

class Kontak extends Component {
	render() {
		return (
			<Section>
				<Grid columns="2" doubling relaxed="very">
					<Grid.Column style={{ borderRight: 'dashed 2px #a3a3a3' }} width="7">
						<DaftarKontak />
					</Grid.Column>
					<Grid.Column>
						<DaftarSosmed />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Kontak
