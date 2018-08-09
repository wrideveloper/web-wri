import React, { Component, Fragment } from 'react'
import { SectionTitle, SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class DaftarKegiatan extends Component {
	render() {
		return (
			<Fragment>
				<SectionTitle
					title="Kegiatan Kami"
					icon="laptop"
					description="Lorem ipsum dolor"
				/>

				<Grid columns="2" doubling>
					<Grid.Row>
						<Grid.Column>
							<SectionItem
								title="Workshop"
								icon="setting"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
						</Grid.Column>
						<Grid.Column>
							<SectionItem
								title="Riset"
								icon="laptop"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<SectionItem
								title="Miniclass"
								icon="book"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
						</Grid.Column>
						<Grid.Column>
							<SectionItem
								title="Hackaton"
								icon="keyboard"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<SectionItem
								title="Code In The Dark"
								icon="blind"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
						</Grid.Column>
						<Grid.Column>
							<SectionItem
								title="OpenTalk"
								icon="volume up"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default DaftarKegiatan
