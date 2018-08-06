import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { Section, SectionText } from '../../components'
import Youtube from 'react-youtube'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'

class Beranda extends Component {
	render() {
		return (
			<Section
				bgImage={require('./images/background.jpg')}
				blur={1}
				strength={200}>
				<Grid columns={2} verticalAlign="middle">
					<Grid.Column width="7" textAlign="right">
						<Fade left>
							<SectionText text="Ingin Belajar" size="medium" />
							<SectionText text="PEMROGRAMAN" size="massive" bold />
							<SectionText text="Ayo Gabung dengan WRI" size="medium" />
							<Link to="Kegiatan" smooth offset={-74}>
								<Button color="green" size="big" icon labelPosition="left">
									<Icon name="arrow down" />
									Lihat Kegiatan Kami
								</Button>
							</Link>
						</Fade>
					</Grid.Column>
					<Grid.Column width="9" textAlign="center">
						<Youtube videoId="slV8Hr3HJUU" />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Beranda
