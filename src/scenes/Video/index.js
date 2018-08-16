import React, { Component, Fragment } from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'
import { Section } from '../../components'
import { JenisVideo, Players } from './components'
import Fade from 'react-reveal/Fade'

class Video extends Component {
	render() {
		return (
			<Fragment>
				<Section bgImage={require('./images/background.jpg')} strength={200}>
					<Grid centered>
						<Grid.Row>
							<Header icon inverted size="huge">
								Video Kami
								<Header.Subheader>Lorem ipsum dolor sit</Header.Subheader>
							</Header>
						</Grid.Row>
						<Grid.Row>
							<Fade top>
								<a href="https://www.youtube.com/channel/UCRDuxyMCKmyaX5rRDFo-RCQ">
									<Button
										labelPosition="left"
										color="green"
										size="large"
										icon="youtube"
										content="Selengkapnya"
									/>
								</a>
							</Fade>
						</Grid.Row>
					</Grid>
				</Section>
				<Section>
					<Grid columns="1" doubling relaxed="very">
						<Grid.Column>
							<Players />
						</Grid.Column>
					</Grid>
				</Section>
			</Fragment>
		)
	}
}

export default Video
