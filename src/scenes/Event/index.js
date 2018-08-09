import React, { Component } from 'react'
import { Section, SectionTitle } from '../../components'
import { Grid, Image, Button, Icon } from 'semantic-ui-react'
import Carousel from 'react-owl-carousel2'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { getRecentEvents } from './services/eventbrite'

class Event extends Component {
	state = {
		events: []
	}

	carouselOptions = {
		items: 3,
		nav: true,
		rewind: true,
		autoplay: true,
		margin: 5
	}

	componentDidMount() {
		getRecentEvents().then(events => this.setState({ events }))
	}

	renderCarousel() {
		return this.state.events.length > 0 ? (
			<Carousel options={this.carouselOptions}>{this.renderEvents()}</Carousel>
		) : (
			''
		)
	}

	renderEvents() {
		return this.state.events.map((event, index) => (
			<div key={index}>
				<Zoom>
					<a href={event.url}>
						<Image src={event.image} fluid bordered />
						<br />
						<p>
							<b>{event.title}</b>
						</p>
					</a>
				</Zoom>
			</div>
		))
	}

	render() {
		return (
			<Section bordered>
				<Grid columns="2" doubling>
					<Grid.Row>
						<Grid.Column>
							<SectionTitle
								title="Event Kami"
								description="Lorem ipsum dolor sit amet"
								icon="calendar alternate outline"
							/>
						</Grid.Column>
						<Grid.Column textAlign="right">
							<Fade right>
								<a href="https://www.eventbrite.com/o/workshop-riset-informatika-17325715953">
									<Button icon labelPosition="left" color="green" size="huge">
										<Icon name="calendar alternate outline" />
										Selengkapnya
									</Button>
								</a>
							</Fade>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width="16">{this.renderCarousel()}</Grid.Column>
					</Grid.Row>
				</Grid>
			</Section>
		)
	}
}

export default Event
