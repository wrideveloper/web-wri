import React, { Component, Fragment } from 'react'
import { Container, Image, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<TopSection>
					<Container>
						<Grid columns="3" verticalAlign="middle" doubling>
							<Grid.Column width="4">
								<Image src={require('./images/logo.png')} fluid />
							</Grid.Column>
							<Grid.Column width="5">
								Komunitas yang bertujuan untuk membina dan mengembangkan
								kreativitas mahasiswa di bidang ilmu pengetahuan dan teknologi
							</Grid.Column>
						</Grid>
					</Container>
				</TopSection>
				<BottomSection>
					<Container>
						Copyright &copy; Workshop Riset Informatika 2018
					</Container>
				</BottomSection>
			</Fragment>
		)
	}
}

const TopSection = styled.div`
	background-color: #0f0f0f;
	color: white;
	padding-top: 20px;
	padding-bottom: 20px;
`

const BottomSection = styled.div`
	background-color: black;
	color: white;
	padding-top: 15px;
	padding-bottom: 15px;
`

export default Footer
