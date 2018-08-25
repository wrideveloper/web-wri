import React, { Component } from 'react'
import { SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class JenisKegiatan extends Component {
  render() {
    return (
      <Grid columns={4} stackable>
        <Grid.Row divided centered>
          <Grid.Column>
            <SectionItem
              title="Miniclass"
              description="Lorem ipsum dolor"
              icon="users"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>

          <Grid.Column>
            <SectionItem
              title="Open Talk"
              description="Lorem ipsum dolor"
              icon="volume up"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>

          <Grid.Column>
            <SectionItem
              title="Workshop"
              description="Lorem ipsum dolor"
              icon="laptop"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>

          <Grid.Column>
            <SectionItem
              title="Membuat Produk"
              description="Lorem ipsum dolor"
              icon="window maximize outline"
              inverted
              color="orange"
              circular
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default JenisKegiatan
