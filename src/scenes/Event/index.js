import React, { Component } from 'react'
import { Section, SectionTitle } from '../../components'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import OwlCarousel from 'react-owl-carousel2'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

class Event extends Component {
	state = {
		events: [
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F47959195%2F247669768924%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C289%2C1100%2C550&s=ae7c5d33564248ce1d16a755111cbc1b',
			'https://scontent-lht6-1.cdninstagram.com/vp/0238c90bd755ec3b4439ea6196e729ac/5BD64B8E/t51.2885-15/e35/30086895_193328254726541_6960843485058433024_n.jpg?efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV9pZyJ9&se=7&ig_cache_key=MTc1OTUwMjQzMzcwODE2NTE5Ng%3D%3D.2',
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F43461296%2F250953574777%2F1%2Foriginal.jpg?s=d27df99c543b3db80b236f798b6149e8',
			'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F43762445%2F199596600959%2F1%2Foriginal.jpg?auto=compress&s=1fd43c39a13dceebe07c2b047ca37c56'
		]
	}

	carouselOptions = {
		items: 3,
		nav: true,
		rewind: true,
		autoplay: true,
		margin: 5
	}

	renderEvents() {
		return this.state.events.map((event, index) => (
			<Zoom>
				<Image src={event} key={index} fluid bordered />
			</Zoom>
		))
	}

	render() {
		return (
			<Section bordered>
				<Grid columns="1">
					<Grid.Column>
						<Fade right>
							<Button
								icon
								labelPosition="left"
								color="orange"
								size="huge"
								floated="right">
								<Icon name="calendar alternate outline" />
								Selengkapnya
							</Button>
						</Fade>
						<SectionTitle
							title="Event Kami"
							description="Lorem ipsum dolor sit amet"
							icon="calendar alternate outline"
						/>
						<OwlCarousel options={this.carouselOptions}>
							{this.renderEvents()}
						</OwlCarousel>
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Event
