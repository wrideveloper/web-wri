import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { Section, SectionTitle } from '../../components'
import Gallery from 'react-photo-gallery'
import ImageComponent from './components/ImageComponent'

import url from 'url'
import http from 'http'
import sizeOf from 'image-size'
import ratio from 'aspect-ratio'

const photoSourse = [
	'https://cdn-images-1.medium.com/max/2000/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg',
	'https://media.istockphoto.com/photos/software-engineer-picture-id519161592?k=6&m=519161592&s=612x612&w=0&h=xjkplQQxI3MdP3ASlbn1tEBn1UnwmS1gdIbBJAuGSjc=',
	'https://fossbytes.com/wp-content/uploads/2017/09/programmer-in-rich-nation.jpg',
	'https://amp.businessinsider.com/images/52b33d33ecad0412601b7659-750-563.jpg',
	'https://3.bp.blogspot.com/-twdklvtJC-g/WGiashGCq1I/AAAAAAAADiQ/C8tXNG83jqcgJV1Sjs_25jbneR6zNiomwCK4B/s1600/programmer%2Bjepang.jpg',
	'https://blog.udacity.com/wp-content/uploads/2018/02/Udacity-How-to-become-a-computer-programmer.png',
	'https://cdn-shop.adafruit.com/1200x900/2548-01.jpg',
	'https://static.makeuseof.com/wp-content/uploads/2017/10/good-programmer-670x335.jpg',
	'https://www.yourfreecareertest.com/wp-content/uploads/2016/07/computer_programmer.jpg',
	'https://media.istockphoto.com/photos/software-developers-picture-id621272078?k=6&m=621272078&s=612x612&w=0&h=H09nCRgrDQ4Tgp69022U-iW2Y1gyrLeBNYzJm58bPTw='
]

class Foto extends Component {
	state = {
		photos: []
	}

	componentDidMount() {
		this.fetchPhotos()
	}

	async fetchPhotos() {
		const promises = photoSourse.map((photo, index) => {
			return this.getImageAspectRatio(photo).then(ratio => {
				return {
					src: photo,
					...ratio
				}
			})
		})

		Promise.all(promises).then(photos => {
			console.log(photos)
			this.setState({ photos })
		})
	}

	getImageAspectRatio(imgUrl) {
		return new Promise((resolve, reject) => {
			let options = url.parse(imgUrl)
			http.get(options, function(response) {
				let chunks = []
				response
					.on('data', function(chunk) {
						chunks.push(chunk)
					})
					.on('end', function() {
						const buffer = Buffer.concat(chunks)
						const size = sizeOf(buffer)
						const imgRatio = ratio(size.width, size.height)
						const ratioArray = imgRatio.split(':')

						resolve({
							width: ratioArray[0],
							height: ratioArray[1]
						})
					})
			})
		})
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
							inverted
						/>
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