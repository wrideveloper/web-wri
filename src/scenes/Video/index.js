import React, { Component, Fragment } from 'react'
import { Header, Button } from 'semantic-ui-react'
import { Section } from '../../components'
import { Players } from './components'
import Fade from 'react-reveal/Fade'

class Video extends Component {
	render() {
		return (
			<Fragment>
				<Section bgImage={require('./images/background.jpg')} strength={200}>
					<div align="center">
						<Header inverted size="huge">
							Video Kami
							<Header.Subheader>Lorem ipsum dolor sit</Header.Subheader>
						</Header>
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
					</div>
				</Section>
				<Section>
					<Players />
				</Section>
			</Fragment>
		)
	}
}

export default Video
