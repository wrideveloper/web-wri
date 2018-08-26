import React, { Component } from 'react'
import { Section, SectionTitle, Margin } from '../../components/'
import Member from './components/Member'
import Carousel from 'react-owl-carousel2'
import styled from 'styled-components'

class Tim extends Component {
  carouselOptions = {
    items: 3,
    rewind: true,
    autoplay: true,
    margin: 5
  }

  lead = {
    name: 'M. Nindra Zaka',
    description: 'Ketua Umum WRI',
    photo: require('./images/members/aka.jpg')
  }

  members = [
    {
      name: 'Dinarpratnya Ningrum',
      description: 'Sekretaris Umum WRI',
      photo: require('./images/members/dinar.jpg')
    },
    {
      name: 'Ardhanarisvari Panduwinata',
      description: 'Bendahara Umum WRI',
      photo: require('./images/members/arwi.jpg')
    },
    {
      name: 'Siti Kholifah',
      description: 'Humas Internal WRI',
      photo: require('./images/members/ifa.jpg')
    },
    {
      name: 'Brilyandika Andhana',
      description: 'Humas Eksternal WRI',
      photo: require('./images/members/dika.jpg')
    },
    {
      name: 'Ivan fadila Putra',
      description: 'Ketua Divisi Pemrograman',
      photo: require('./images/members/ivan.jpg')
    },
    {
      name: 'Roy Achmad',
      description: 'Ketua Divisi Multimedia',
      photo: require('./images/members/roy.jpg')
    },
    {
      name: 'Muhammad Syabhri',
      description: 'Ketua Divisi Networking',
      photo: require('./images/members/syabhri.jpg')
    },
    {
      name: 'M. Dio Syahrizal',
      description: 'Anggota Divisi Pemrograman',
      photo: require('./images/members/dio.jpg')
    },
    {
      name: 'M. Alfin Zakariya',
      description: 'Anggota Divisi Pemrograman',
      photo: require('./images/members/alfin.jpg')
    },
    {
      name: 'M. Berlian Nusantara',
      description: 'Anggota Divisi Pemrograman',
      photo: require('./images/members/berlian.jpg')
    },
    {
      name: 'Herlina Prastiwi',
      description: 'Anggota Divisi Pemrograman',
      photo: require('./images/members/herlina.jpg')
    },
    {
      name: 'Novelia Yuliatika',
      description: 'Anggota Divisi Multimedia',
      photo: require('./images/members/tika.jpg')
    },
    {
      name: 'Rio Irvansyah',
      description: 'Anggota Divisi Multimedia',
      photo: require('./images/members/rio.jpg')
    },
    {
      name: 'Rahmat A.',
      description: 'Anggota Divisi Networking',
      photo: require('./images/members/rahmat.jpg')
    },
    {
      name: 'Faisal Apriliawan',
      description: 'Anggota Divisi Networking',
      photo: require('./images/members/faisal.jpg')
    },
    {
      name: 'Rizky Firmansyah',
      description: 'Anggota Divisi Networking',
      photo: require('./images/members/rizky.jpg')
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
      <TimSection bgImage={require('./images/background.jpg')} strength={200}>
        <SectionTitle
          title="TIM KAMI"
          description="Siap berkontribusi demi kemajuan bersama"
        />

        <Margin top={70} bottom={70}>
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
      </TimSection>
    )
  }
}

const TimSection = styled(Section)`
  padding-top: 100px !important;
  padding-bottom: 100px !important;
`

export default Tim
