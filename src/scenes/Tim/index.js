import React, { Component } from 'react'
import { Section, SectionTitle } from '../../components/'
import Member from './components/Member'
import { Margin } from 'styled-components-spacing'
import Carousel from 'react-owl-carousel2'

class Tim extends Component {
  carouselOptions = {
    items: 3,
    rewind: true,
    autoplay: true,
    margin: 5
  }

  lead = {
    name: 'M. Nindra Zaka',
    description: 'Lorem ipsum dolor sit amet',
    photo:
      'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg'
  }

  members = [
    {
      name: 'Dinarpratnya Ningrum',
      description: 'Lorem ipsum dolor sit amet',
      photo:
        'https://janecanblogdotcom.files.wordpress.com/2014/09/ashley-square-profile.jpg'
    },
    {
      name: 'Ivan fadila Putra',
      description: 'Lorem ipsum dolor sit amet',
      photo:
        'https://d3n8a8pro7vhmx.cloudfront.net/euromove/pages/175/attachments/original/1499183643/Stephen_square_profile.jpg?1499183643'
    },
    {
      name: 'Ardhanarisvari Panduwinata',
      description: 'Lorem ipsum dolor sit amet',
      photo:
        'https://static1.squarespace.com/static/52f1466be4b00a8e06e74ff5/t/597fa7e115d5dbed1724bf39/1501538276944/Square+profile+picture+1.jpg'
    },
    {
      name: 'Berlian Nusantara',
      description: 'Lorem ipsum dolor sit amet',
      photo:
        'http://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'
    },
    {
      name: 'Brilyandika Andhana',
      description: 'Lorem ipsum dolor sit amet',
      photo:
        'http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg'
    },
    {
      name: 'Dio Syahrizal',
      description: 'Lorem ipsum dolor sit amet',
      photo:
        'https://u.imageresize.org/v2/60fcd9e5-ce00-4914-9603-2a9c07d2c5ef.jpeg'
    },
    {
      name: 'Kholifa Cimmit',
      description: 'Lorem ipsum dolor sit amet',
      photo:
        'https://2egi6j3s5pui2uv1ge1sp7h1-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/profile-square.jpg'
    }
  ]

  renderMembers() {
    return this.members.map((member, index) => (
      <div align="center" key={index}>
        <Member
          photo={member.photo}
          name={member.name}
          description={member.description}
        />
      </div>
    ))
  }

  render() {
    return (
      <Section bgImage={require('./images/background.jpg')} strength={200}>
        <SectionTitle
          title="TIM KAMI"
          description="Lorem ipsum dolor sit amet"
        />

        <Margin bottom={5} top={5}>
          <div align="center">
            <Member
              photo={this.lead.photo}
              name={this.lead.name}
              description={this.lead.description}
            />
          </div>
        </Margin>

        <Carousel options={this.carouselOptions}>
          {this.renderMembers()}
        </Carousel>
      </Section>
    )
  }
}

export default Tim
