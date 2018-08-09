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

	renderEvents() {
		return this.state.events.map((event, index) => (
			<Zoom key={index}>
				<a href={event.url}>
					<div>
						<Image src={event.image} fluid bordered />
						<br />
						<p>
							<b>{event.title}</b>
						</p>
					</div>
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
								description="Lorem ipsum dolor sit amet"
								icon="calendar alternate outline"
							/>
						</Grid.Column>
						<Grid.Column textAlign="right">
							<Fade right>
								<Button icon labelPosition="left" color="green" size="huge">
									<Icon name="calendar alternate outline" />
									Selengkapnya
								</Button>
							</Fade>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width="16">
							<Carousel options={this.carouselOptions}>
								{this.renderEvents()}
							</Carousel>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Section>
		)
	}
}

export default Event
