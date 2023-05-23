import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container ps-5 pt-5 contact-page">
        <div className="ms-5 mt-5">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially on
              ambitious or large projects. However, if you have any other
              requests or questions, don't hesitate to contact me using below
              form either.
            </p>
            <div className="contact-form">
              <form action="">
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea name="meassage" placeholder="Meassage" required />
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="Send" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="info-map">
            Muhammad Awais <br /> Pakistan, <br /> Garjakh Grw <br />
            <span>mawaismalik520@gmail.com</span>
          </div>
          {/* <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://www.pakimag.com/files/2010/12/Gujranwala-Map-of-city-and-its-surrounding-Villages-towns-and-many-more.jpg?w=640" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>
                Muhammad Awais lives here, come over for a cup of Tea :){' '}
              </Popup>
            </Marker>
          </MapContainer> */}
          {/* </div> */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
