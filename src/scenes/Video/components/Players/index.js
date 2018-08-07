import React, { Component, Fragment } from 'react'
import Youtube from 'react-youtube'
import { Grid, Image } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'
import styled from 'styled-components'
import Carousel from 'react-owl-carousel2'

const YoutubePlayer = styled(Youtube)`
	width: 100%;
	min-height: auto;
`

class Players extends Component {
	state = {
		videos: ['gQojMIhELvM', 'pkdgVYehiTE', 'ZS_kXvOeQ5Y']
	}

	carouselOptions = {
		items: 3,
		nav: true,
		rewind: true,
		autoplay: true,
		margin: 5
	}

	render() {
		return (
			<Fragment>
				<Grid columns="1">
					<Grid.Row>
						<Grid.Column>
							<Zoom>
								<YoutubePlayer videoId={this.state.videos[0]} />
							</Zoom>

							<Carousel options={this.carouselOptions}>
								<Zoom>
									<Image src="https://dianesieg.com/wp-content/uploads/2016/11/video-player-placeholder-very-large.png" />
								</Zoom>
								<Zoom>
									<Image src="https://dianesieg.com/wp-content/uploads/2016/11/video-player-placeholder-very-large.png" />
								</Zoom>
								<Zoom>
									<Image src="https://dianesieg.com/wp-content/uploads/2016/11/video-player-placeholder-very-large.png" />
								</Zoom>
								<Zoom>
									<Image src="https://dianesieg.com/wp-content/uploads/2016/11/video-player-placeholder-very-large.png" />
								</Zoom>
								<Zoom>
									<Image src="https://dianesieg.com/wp-content/uploads/2016/11/video-player-placeholder-very-large.png" />
								</Zoom>
								<Zoom>
									<Image src="https://dianesieg.com/wp-content/uploads/2016/11/video-player-placeholder-very-large.png" />
								</Zoom>
							</Carousel>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default Players
