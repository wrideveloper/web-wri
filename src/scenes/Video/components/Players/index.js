import React, { Component, Fragment } from 'react'
import Youtube from 'react-youtube'
import { Grid, Image, Header } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'
import styled from 'styled-components'
import Carousel from 'react-owl-carousel2'

import { getRecentVideos } from '../../services/youtube'

const YoutubePlayer = styled(Youtube)`
	width: 100%;
	min-height: auto;
`

class Players extends Component {
	state = {
		videos: [],
		active_video: '',
		autoplay: 0
	}

	carouselOptions = {
		items: 4,
		nav: true,
		rewind: true,
		autoplay: true,
		margin: 5
	}

	componentDidMount() {
		getRecentVideos().then(videos =>
			this.setState({ videos, active_video: videos[0] })
		)
	}

	renderThumbnails() {
		return this.state.videos.map((video, index) => (
			<Zoom key={index}>
				<div onClick={() => this.changeActiveVideo(video)}>
					<Image src={video.thumbnail} />
					<br />
					<b>{video.title}</b>
				</div>
			</Zoom>
		))
	}

	changeActiveVideo(video) {
		this.setState({ active_video: video, autoplay: 1 })
	}

	render() {
		console.log(this.state.videos)
		return (
			<Fragment>
				<Grid columns="1">
					<Grid.Row>
						<Grid.Column>
							<Zoom>
								<Header
									content={this.state.active_video.title}
									icon="youtube"
								/>
								<br />
								<YoutubePlayer
									ref={this.player}
									videoId={this.state.active_video.id}
									opts={{
										playerVars: {
											autoplay: this.state.autoplay
										}
									}}
								/>
							</Zoom>

							<Carousel options={this.carouselOptions}>
								{this.renderThumbnails()}
							</Carousel>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default Players
