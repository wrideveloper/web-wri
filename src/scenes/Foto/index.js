import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { Section, SectionTitle } from '../../components'
import Gallery from 'react-photo-gallery'

const photoSourse = [
	'https://cdn-images-1.medium.com/max/2000/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
	'https://media.istockphoto.com/photos/software-engineer-picture-id519161592?k=6&m=519161592&s=612x612&w=0&h=xjkplQQxI3MdP3ASlbn1tEBn1UnwmS1gdIbBJAuGSjc=',
	'https://www.technotification.com/wp-content/uploads/2017/06/focused-programmer-writing-code.jpg',
	'https://edge.alluremedia.com.au/m/l/2015/12/lightkb.jpg',
	'https://3.bp.blogspot.com/-twdklvtJC-g/WGiashGCq1I/AAAAAAAADiQ/C8tXNG83jqcgJV1Sjs_25jbneR6zNiomwCK4B/s1600/programmer%2Bjepang.jpg',
	'http://ggyoga.co/wp-content/uploads/2018/06/mark-zuckerberg-lebenslauf-mark-zuckerberg-1.jpg',
	'https://cdn-shop.adafruit.com/1200x900/2548-01.jpg',
	'https://img.jakpost.net/c/2017/03/20/2017_03_20_23785_1490003246._large.jpg',
	'https://static.makeuseof.com/wp-content/uploads/2017/10/good-programmer-670x335.jpg'
]

const size = [
	{
		width: 4,
		height: 3
	},
	{
		width: 1,
		height: 1
	},
	{
		width: 3,
		height: 4
	},
	{
		width: 3,
		height: 4
	},
	{
		width: 3,
		height: 4
	},
	{
		width: 3,
		height: 4
	},
	{
		width: 4,
		height: 3
	},
	{
		width: 3,
		height: 4
	},
	{
		width: 4,
		height: 3
	}
]

class Foto extends Component {
	state = {
		photos: []
	}

	componentDidMount() {
		this.fetchPhotos()
	}

	fetchPhotos() {
		const photos = photoSourse.map((photo, index) => ({
			src: photo,
			...size[index]
		}))

		this.setState({ photos })
	}

	render() {
		return (
			<Section bgImage={require('./images/background.jpg')}>
				<Grid columns="1">
					<Grid.Column>
						<Button
							icon
							labelPosition="left"
							color="pink"
							size="huge"
							floated="right">
							<Icon name="instagram" />
							Selengkapnya
						</Button>
						<SectionTitle
							title="Foto Kegiatan"
							description="Lorem ipsum dolor sit amet"
							icon="instagram"
						/>
						<Gallery photos={this.state.photos} columns={5} margin={3} />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Foto
