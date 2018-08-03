import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import Section from '../../components/Section'
import SectionText from '../../components/SectionText'
import Youtube from 'react-youtube'
import styled from 'styled-components'

class Beranda extends Component {
	render() {
		return (
			<Section
				bgImage={require('./images/background.jpg')}
				blur={1}
				strength={200}>
				<Grid columns={2} verticalAlign="middle" textAlign="right">
					<Grid.Column>
						<SectionText text="Ingin Belajar" size="medium" />
						<SectionText text="PEMROGRAMAN" size="massive" bold />
						<SectionText text="Ayo Gabung dengan WRI" size="medium" />
						<Button color="green" size="big">
							Ikuti Kegiatan Kami
						</Button>
					</Grid.Column>
					<Grid.Column>
						<Youtube videoId="slV8Hr3HJUU" />
					</Grid.Column>
				</Grid>
			</Section>
		)
	}
}

export default Beranda
