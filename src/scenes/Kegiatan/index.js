import React, { Component, Fragment } from 'react'
import { Section } from '../../components'
import { Grid, Header, Icon } from 'semantic-ui-react'
import { JenisKegiatan, DaftarKegiatan } from './components'
import { Margin } from 'styled-components-spacing'

class Kegiatan extends Component {
	render() {
		return (
			<Fragment>
				<Section bgImage={require('./images/background.jpg')} strength={200}>
					<Grid textAlign="center">
						<Grid.Row>
							<Header icon inverted size="huge">
								Kegiatan Kami
								<Header.Subheader>Lorem ipsum dolor sit</Header.Subheader>
							</Header>
						</Grid.Row>
						<Grid.Row>
							<JenisKegiatan />
						</Grid.Row>
					</Grid>
				</Section>
				<Section>
					<DaftarKegiatan />
				</Section>
			</Fragment>
		)
	}
}

export default Kegiatan
