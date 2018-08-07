import React, { Component, Fragment } from 'react'
import { SectionTitle, SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

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
							<SectionItem
								title="Facebook"
								icon="facebook"
								description="WRIPolinema"
								color="blue"
								size="tiny"
							/>
							<SectionItem
								title="Instagram"
								icon="instagram"
								description="wri_polinema"
								color="pink"
								size="tiny"
							/>
						</Grid.Column>
						<Grid.Column>
							<SectionItem
								title="Youtube"
								icon="youtube"
								description="Workshop Riset Informatika"
								color="red"
								size="tiny"
							/>
							<SectionItem
								title="Github"
								icon="github"
								description="wrideveloper"
								size="tiny"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default DaftarSosmed
