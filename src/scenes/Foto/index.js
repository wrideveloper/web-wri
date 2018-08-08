import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { Section, SectionTitle } from '../../components'
import Gallery from 'react-photo-gallery'
import ImageComponent from './components/ImageComponent'
import Fade from 'react-reveal/Fade'

import { getRecentPhotos } from './services/instagram'

class Foto extends Component {
	state = {
		photos: []
	}

	componentDidMount() {
		this.fetchPhotos()
	}

	fetchPhotos() {
		getRecentPhotos().then(photos => {
			this.setState({ photos })
		})
	}

	render() {
		return (
			<Section bgImage={require('./images/background.jpg')} strength={200}>
				<Grid columns="2" doubling>
					<Grid.Row>
						<Grid.Column>
							<SectionTitle
								title="Foto Kegiatan"
								description="Lorem ipsum dolor sit amet"
								icon="instagram"
								inverted
							/>
						</Grid.Column>
						<Grid.Column textAlign="right">
							<Fade right>
								<a href="https://www.instagram.com/wri_polinema/">
									<Button
										icon
										labelPosition="left"
										color="green"
										size="huge"
										icon="instagram"
										content="Selengkapnya"
									/>
								</a>
							</Fade>
						</Grid.Column>
					</Grid.Row>
					<Grid.Column width="16">
						<Gallery
							photos={this.state.photos}
							columns={4}
							margin={3}
							ImageComponent={ImageComponent}
						/>
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Foto
