import React, { Component } from 'react'
import { SectionItem } from '../../../../components'
import { Header, Image, Grid } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import PropTypes from 'prop-types'

class Divisi extends Component {
	static propTypes = {
		image: PropTypes.string,
		name: PropTypes.string,
		description: PropTypes.string,
		subdivisi: PropTypes.array
	}

	render() {
		return (
			<div>
				<Grid columns="2" doubling>
					<Grid.Column width="5">
						<Rotate>
							<Image src={this.props.image} size="small" />
						</Rotate>
					</Grid.Column>
					<Grid.Column width="11">
						<Fade top>
							<Header size="huge">
								{this.props.name}
								<Header.Subheader content={this.props.description} />
							</Header>
						</Fade>
					</Grid.Column>
				</Grid>

				<Grid columns={3} doubling>
					{this.props.subdivisi.map((subdivisi, index) => (
						<Grid.Column key={index}>
							<SectionItem
								title={subdivisi.name}
								icon={subdivisi.icon}
								size="small"
							/>
						</Grid.Column>
					))}
				</Grid>
			</div>
		)
	}
}

export default Divisi
