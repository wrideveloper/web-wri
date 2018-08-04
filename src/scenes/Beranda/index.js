import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { Section, SectionText } from '../../components'
import Youtube from 'react-youtube'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

class Beranda extends Component {
	render() {
		return (
			<Section
				bgImage={require('./images/background.jpg')}
				blur={1}
				strength={200}>
				<Grid columns={2} verticalAlign="middle" textAlign="right">
					<Grid.Column>
						<Fade right>
							<SectionText text="Ingin Belajar" size="medium" />
							<SectionText text="PEMROGRAMAN" size="massive" bold />
							<SectionText text="Ayo Gabung dengan WRI" size="medium" />
							<Button color="green" size="big" icon labelPosition="left">
								<Icon name="arrow down" />
								Ikuti Kegiatan Kami
							</Button>
						</Fade>
					</Grid.Column>
					<Grid.Column>
						<Zoom>
							<Youtube videoId="slV8Hr3HJUU" />
						</Zoom>
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Beranda
