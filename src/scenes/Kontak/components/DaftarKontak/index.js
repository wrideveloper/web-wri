import React, { Component, Fragment } from 'react'
import { SectionTitle } from '../../../../components'
import { Header, Icon, Grid } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

const Item = ({ title, icon, description, color }) => (
	<Header size="tiny">
		<Icon name={icon} circular color={color} inverted />

		<Header.Content>
			<Zoom>
				{title}
				<Header.Subheader>{description}</Header.Subheader>
			</Zoom>
		</Header.Content>
	</Header>
)

class DaftarKontak extends Component {
	render() {
		return (
			<Fragment>
				<SectionTitle
					title="Hubungi Kami"
					icon="chat"
					description="lorem ipsum dolor sit amet"
					size="medium"
				/>

				<Grid columns="2">
					<Grid.Row>
						<Grid.Column>
							<Item
								title="Email"
								icon="mail"
								description="wripolinema@gmail.com"
								color="red"
							/>
							<Item
								title="Whatsapp"
								icon="whatsapp"
								description="+6285331247098"
								color="green"
							/>
						</Grid.Column>
						<Grid.Column>
							<Item
								title="Alamat"
								icon="map"
								description="Polinema"
								color="blue"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default DaftarKontak
