import React, { Component, Fragment } from 'react'
import { Button, Header } from 'semantic-ui-react'
import { Section } from '../../components'
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
		getRecentPhotos().then(photos => this.setState({ photos }))
	}

	render() {
		return (
			<Fragment>
				<Section bgImage={require('./images/background.jpg')} strength={200}>
					<div align="center">
						<Header inverted size="huge">
							Foto Kegiatan
							<Header.Subheader content="Lorem ipsum dolor sit amet" />
						</Header>
						<Fade top>
							<a href="https://www.instagram.com/wri_polinema/">
								<Button
									labelPosition="left"
									color="green"
									size="large"
									icon="instagram"
									content="Selengkapnya"
								/>
							</a>
						</Fade>
					</div>
				</Section>
				<Section>
					<Gallery
						photos={this.state.photos}
						columns={3}
						margin={5}
						ImageComponent={ImageComponent}
					/>
				</Section>
			</Fragment>
		)
	}
}

export default Foto
