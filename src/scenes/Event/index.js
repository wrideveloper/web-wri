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
		margin: 15
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
			<Zoom key={index}>
				<a href={event.url}>
					<Image src={event.image} fluid />
					<br />
					<b>{event.title}</b>
				</a>
			</Zoom>
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
								icon="calendar alternate outline"
								description="Lorem ipsum dolor"
							/>
						</Grid.Column>
						<Grid.Column textAlign="right">
							<Fade right>
								<a href="https://www.eventbrite.com/o/workshop-riset-informatika-17325715953">
									<Button
										icon
										labelPosition="left"
										color="green"
										size="huge"
										icon="calendar alternate outline"
										content="Selengkapnya"
									/>
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
