import React, { Component, Fragment } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { SectionItem, SectionTitle } from '../../../../components'
import Fade from 'react-reveal/Fade'

class Info extends Component {
	render() {
		return (
			<Fragment>
				<SectionTitle
					title="Video Kami"
					description="Lorem ipsum dolor sit"
					icon="youtube"
				/>
				<Grid columns="1" doubling>
					<Grid.Row>
						<Grid.Column>
							<SectionItem
								title="After Movie"
								icon="video"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
							<SectionItem
								title="Tutorial"
								icon="computer"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
							<SectionItem
								title="Teaser"
								icon="setting"
								description="Lorem ipsum dolor sit amet"
								size="small"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<br />
				<br />
				<Fade top>
					<Button
						color="youtube"
						content="Selengkapya"
						icon="youtube"
						labelPosition="left"
						size="massive"
					/>
				</Fade>
			</Fragment>
		)
	}
}

export default Info
