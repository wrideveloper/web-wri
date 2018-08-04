import React, { Component, Fragment } from 'react'
import { SectionTitle } from '../../../../components'
import { Header, Icon, Grid } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

const Item = ({ title, icon, description }) => (
	<Header size="small">
		<Icon name={icon} circular inverted />

		<Header.Content>
			<Zoom>
				{title}
				<Header.Subheader>{description}</Header.Subheader>
			</Zoom>
		</Header.Content>
	</Header>
)

class DaftarKegiatan extends Component {
	render() {
		return (
			<Fragment>
				<SectionTitle
					title="Kegiatan Kami"
					icon="laptop"
					description="lorem ipsum dolor sit amet"
				/>

				<Grid columns="2">
					<Grid.Row>
						<Grid.Column>
							<Item
								title="Workshop"
								icon="setting"
								description="Lorem ipsum dolor sit amet"
							/>
						</Grid.Column>
						<Grid.Column>
							<Item
								title="Riset"
								icon="laptop"
								description="Lorem ipsum dolor sit amet"
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Item
								title="Miniclass"
								icon="book"
								description="Lorem ipsum dolor sit amet"
							/>
						</Grid.Column>
						<Grid.Column>
							<Item
								title="Hackaton"
								icon="keyboard"
								description="Lorem ipsum dolor sit amet"
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Item
								title="Code In The Dark"
								icon="blind"
								description="Lorem ipsum dolor sit amet"
							/>
						</Grid.Column>
						<Grid.Column>
							<Item
								title="OpenTalk"
								icon="volume up"
								description="Lorem ipsum dolor sit amet"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default DaftarKegiatan
