import React, { Component } from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

import { Navigation } from './components'
import { Beranda, Profil, Kegiatan, Foto, Video, Tim, Footer } from './scenes'

class App extends Component {
  menu = [
    'Beranda',
    'Profil',
    'Kegiatan',
    'Foto',
    'Video',
    'Tim Kami',
    'Kontak'
  ]

  scenes = [
    <Beranda />,
    <Profil />,
    <Kegiatan />,
    <Foto />,
    <Video />,
    <Tim />,
    <Footer />
  ]

  renderScenes() {
    return this.scenes.map((scene, index) => (
      <Element id={this.menu[index]} key={index}>
        {scene}
      </Element>
    ))
  }

  render() {
    return (
      <div>
        <Navigation menu={this.menu} />
        {this.renderScenes()}
      </div>
    )
  }
}

export default App
