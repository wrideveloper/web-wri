import React, { Component, Fragment } from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'

class Info extends Component {
	render() {
		return (
			<Fragment>
				<Header icon size="huge">
					<Icon name="youtube" color="red" circular />
					Video Kami
					<Header.Subheader>
						Workshop Riset Informatika juga memberikan video tutorial tentang
						teknologi terkini serta video kegiatan kami
					</Header.Subheader>
				</Header>
				<div align="center">
					<Button
						color="youtube"
						content="Selengkapya"
						icon="youtube"
						labelPosition="left"
						size="large"
					/>
				</div>
			</Fragment>
		)
	}
}

export default Info
