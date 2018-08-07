import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'
import { Section, SectionText } from '../../components'
import Youtube from 'react-youtube'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const BerandaGrid = styled(Grid)`
	padding-top: 55px !important;
	padding-bottom: 55px !important;
`

const YoutubePlayer = styled(Youtube)`
	border: solid 2px white;
	border-radius: 5px;
	width: 100%;
	min-height: auto;
`

class Beranda extends Component {
	render() {
		return (
			<Section bgImage={require('./images/background.jpg')} strength={200}>
				<BerandaGrid columns={2} verticalAlign="middle" doubling>
					<Grid.Column width="7" textAlign="right" only="computer">
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
						<YoutubePlayer videoId="slV8Hr3HJUU" />
					</Grid.Column>
				</BerandaGrid>
			</Section>
		)
	}
}

export default Beranda
