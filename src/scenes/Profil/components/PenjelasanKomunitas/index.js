import React, { Component, Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'
import { Margin } from '../../../../components'
import Rotate from 'react-reveal/Rotate'
import Fade from 'react-reveal/Fade'

class PenjelasanKomunitas extends Component {
  render() {
    return (
      <Fragment>
        <div align="center">
          <Rotate>
            <Margin bottom={15}>
              <Image src={require('../../images/logo wri.png')} size="small" />
            </Margin>
          </Rotate>
        </div>

        <Fade top>
          <Header size="huge" icon>
            <Header.Content>
              Workshop Riset Informatika
              <Header.Subheader>
                <h4>
                  Komunitas yang bertujuan untuk membina dan mengembangkan
                  kreativitas mahasiswa di bidang ilmu pengetahuan dan teknologi
                </h4>
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Fade>
      </Fragment>
    )
  }
}

export default PenjelasanKomunitas
