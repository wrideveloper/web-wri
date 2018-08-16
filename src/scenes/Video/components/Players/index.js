import React, { Component, Fragment } from 'react'
import Youtube from 'react-youtube'
import { Image, Header } from 'semantic-ui-react'
import { Margin } from 'styled-components-spacing'
import Zoom from 'react-reveal/Zoom'
import styled from 'styled-components'
import Carousel from 'react-owl-carousel2'

import { getRecentVideos } from '../../services/youtube'

class Players extends Component {
	state = {
		videos: [],
		active_video: '',
		autoplay: 0
	}

	carouselOptions = {
		items: 3,
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

	renderCarousel() {
		return this.state.videos.length > 0 ? (
			<Carousel options={this.carouselOptions}>
				{this.renderThumbnails()}
			</Carousel>
		) : (
			''
		)
	}

	renderThumbnails() {
		return this.state.videos.map((video, index) => (
			<Zoom key={index}>
				<div onClick={() => this.changeActiveVideo(video)}>
					<Image src={video.thumbnail} />
					<Header size="tiny">{video.title}</Header>
				</div>
			</Zoom>
		))
	}

	changeActiveVideo(video) {
		this.setState({ active_video: video, autoplay: 1 })
	}

	render() {
		return (
			<Fragment>
				<Zoom>
					<Margin bottom={3}>
						<Header content={this.state.active_video.title} />
					</Margin>

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

				{this.renderCarousel()}
			</Fragment>
		)
	}
}

const YoutubePlayer = styled(Youtube)`
	width: 100%;
	min-height: auto;
`

export default Players
