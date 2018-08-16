import React, { Component, Fragment } from 'react'
import { SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class DaftarKontak extends Component {
	render() {
		return (
			<Fragment>
				<Grid columns="2" stackable>
					<Grid.Row>
						<Grid.Column>
							<SectionItem
								title="Email"
								icon="mail"
								description="wripolinema@gmail.com"
								color="red"
								size="tiny"
							/>
							<SectionItem
								title="Whatsapp"
								icon="whatsapp"
								description="+6285331247098"
								color="green"
								size="tiny"
							/>
						</Grid.Column>
						<Grid.Column>
							<SectionItem
								title="Alamat"
								icon="map"
								description="Polinema"
								color="blue"
								size="tiny"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default DaftarKontak
