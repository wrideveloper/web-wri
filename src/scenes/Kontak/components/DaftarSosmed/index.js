import React, { Component, Fragment } from 'react'
import { SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class DaftarSosmed extends Component {
	render() {
		return (
			<Fragment>
				<Grid columns="2" stackable>
					<Grid.Row>
						<Grid.Column>
							<a href="https://www.facebook.com/WRIPolinema/">
								<SectionItem
									title="Facebook"
									icon="facebook"
									description="WRIPolinema"
									color="blue"
									size="tiny"
								/>
							</a>
							<br />
							<a href="https://www.instagram.com/wri_polinema/">
								<SectionItem
									title="Instagram"
									icon="instagram"
									description="wri_polinema"
									color="pink"
									size="tiny"
								/>
							</a>
						</Grid.Column>
						<Grid.Column>
							<a href="https://www.youtube.com/channel/UCRDuxyMCKmyaX5rRDFo-RCQ">
								<SectionItem
									title="Youtube"
									icon="youtube"
									description="Workshop Riset Informatika"
									color="red"
									size="tiny"
								/>
							</a>
							<br />
							<a href="https://github.com/wrideveloper/">
								<SectionItem
									title="Github"
									icon="github"
									description="wrideveloper"
									size="tiny"
								/>
							</a>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default DaftarSosmed
