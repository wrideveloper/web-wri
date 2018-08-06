import React, { Component, Fragment } from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'
import Rotate from 'react-reveal/Rotate'
import Fade from 'react-reveal/Fade'

class Info extends Component {
	render() {
		return (
			<Fragment>
				<Header icon size="huge">
					<Rotate>
						<Icon name="youtube" color="red" circular />
					</Rotate>
					<Fade top>
						Video Kami
						<Header.Subheader>
							Workshop Riset Informatika juga memberikan video tutorial tentang
							teknologi terkini serta video kegiatan kami
						</Header.Subheader>
					</Fade>
				</Header>
				<div align="center">
					<Fade top>
						<Button
							color="youtube"
							content="Selengkapya"
							icon="youtube"
							labelPosition="left"
							size="large"
						/>
					</Fade>
				</div>
			</Fragment>
		)
	}
}

export default Info
