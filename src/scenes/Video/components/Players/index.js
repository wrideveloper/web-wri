import React, { Component, Fragment } from 'react'
import Youtube from 'react-youtube'
import { Grid } from 'semantic-ui-react'
import { height } from 'window-size'

class Players extends Component {
	state = {
		videos: ['gQojMIhELvM', 'pkdgVYehiTE', 'ZS_kXvOeQ5Y']
	}

	playerOpts = {
		width: '100%',
		height: 'auto'
	}

	render() {
		return (
			<Fragment>
				<Grid columns="2">
					<Grid.Row>
						<Grid.Column width="12">
							<Youtube
								videoId={this.state.videos[0]}
								opts={{ ...this.playerOpts, height: '100%' }}
							/>
						</Grid.Column>
						<Grid.Column width="4">
							<Youtube
								videoId={this.state.videos[0]}
								opts={{ ...this.playerOpts }}
							/>
							<Youtube
								videoId={this.state.videos[1]}
								opts={{ ...this.playerOpts }}
							/>
							<Youtube
								videoId={this.state.videos[2]}
								opts={{ ...this.playerOpts }}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fragment>
		)
	}
}

export default Players
