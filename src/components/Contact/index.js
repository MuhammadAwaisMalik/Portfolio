import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'mawaisEmail',
        'template_yakftg2',
        form.current,
        'iD3u-StKSk7cKzkuT'
      )
      .then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent to Muhammad',
            showConfirmButton: false,
            timer: 2500,
          })
        },
        (error) => {
          console.log(error.text)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      )
  }

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
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Enter Your Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Enter Your Email"
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
                    <textarea
                      name="message"
                      placeholder="Enter Your Meassage"
                      required
                    />
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
