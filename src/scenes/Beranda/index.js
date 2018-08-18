import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { Section } from '../../components'
import Youtube from 'react-youtube'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Text from './components/Text'

class Beranda extends Component {
  render() {
    return (
      <Section bgImage={require('./images/background.jpg')} strength={200}>
        <BerandaGrid columns={2} verticalAlign="middle" doubling>
          <Grid.Column width="7" textAlign="right" only="computer">
            <Fade left>
              <Text value="Ingin Belajar" size="medium" />
              <Text value="PEMROGRAMAN" size="massive" bold />
              <Text value="Ayo Gabung dengan WRI" size="medium" />
              <Link to="Kegiatan" smooth offset={-74}>
                <Button
                  color="green"
                  size="big"
                  labelPosition="left"
                  icon="arrow down"
                  content="Lihat Kegiatan Kami"
                />
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

const BerandaGrid = styled(Grid)`
  padding-top: 100px !important;
  padding-bottom: 100px !important;
`

const YoutubePlayer = styled(Youtube)`
  border: solid 2px white;
  border-radius: 5px;
  width: 100%;
  min-height: auto;
`

export default Beranda
