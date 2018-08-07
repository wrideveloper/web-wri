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

class DaftarSosmed extends Component {
	render() {
		return (
			<Fragment>
				<SectionTitle
					title="Ikuti Kami"
					icon="rss"
					description="lorem ipsum dolor sit amet"
					size="medium"
				/>

				<Grid columns="2">
					<Grid.Row>
						<Grid.Column>
							<Item
								title="Facebook"
								icon="facebook"
								description="WRIPolinema"
								color="blue"
							/>
							<Item
								title="Instagram"
								icon="instagram"
								description="wri_polinema"
								color="pink"
							/>
						</Grid.Column>
						<Grid.Column>
							<Item
								title="Youtube"
								icon="youtube"
								description="Workshop Riset Informatika"
								color="red"
							/>
							<Item title="Github" icon="github" description="wrideveloper" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default DaftarSosmed
