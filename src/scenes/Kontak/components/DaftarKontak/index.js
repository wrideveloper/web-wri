import React, { Component, Fragment } from 'react'
import { SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class DaftarKontak extends Component {
  render() {
    return (
      <Fragment>
        <Grid columns="2" stackable>
          <Grid.Row>
            <Grid.Column>
              <SectionItem
                title="Email"
                icon="mail"
                description="wripolinema@gmail.com"
                color="orange"
                size="tiny"
              />
            </Grid.Column>
            <Grid.Column>
              <SectionItem
                title="Alamat"
                icon="map marker alternate"
                description="Jl. Soekarno Hatta No. 9 Malang - Politeknik Negeri Malang"
                color="red"
                size="tiny"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default DaftarKontak
