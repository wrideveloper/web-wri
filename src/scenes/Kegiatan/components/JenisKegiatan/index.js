import React, { Component } from 'react'
import { SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class JenisKegiatan extends Component {
	render() {
		return (
			<Grid columns={4}>
				<Grid.Row divided centered>
					<Grid.Column>
						<SectionItem
							title="Miniclass"
							description="Lorem ipsum dolor"
							icon="book"
							inverted
							color="orange"
						/>
					</Grid.Column>

					<Grid.Column>
						<SectionItem
							title="Open Talk"
							description="Lorem ipsum dolor"
							icon="sound"
							inverted
							color="orange"
						/>
					</Grid.Column>

					<Grid.Column>
						<SectionItem
							title="Workshop"
							description="Lorem ipsum dolor"
							icon="cog"
							inverted
							color="orange"
						/>
					</Grid.Column>

					<Grid.Column>
						<SectionItem
							title="Kompetisi"
							description="Lorem ipsum dolor"
							icon="winner"
							inverted
							color="orange"
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default JenisKegiatan
