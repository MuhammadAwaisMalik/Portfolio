import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

import './index.scss'
import Awais from '../../assets/images/MuhammadAwais.png'
import ReactLogo from '../../assets/images/logo.svg'
import LogoA from '../../assets/images/logo.png'
import AnimatedLetters from '../AnimatedLetters'
import LogoReact from '../../assets/images/logo.svg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['w', 'a', 'i', 's']
  const jobArray = [
    'R',
    'e',
    'a',
    'c',
    't',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container ps-5 pt-5 home-page">
        <div className="row ms-5 mt-5">
          <div className="text-zone col-md-6 col-12">
            <h1 className="">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span> <br />{' '}
              <span className={`${letterClass} _13`}>I</span>{' '}
              <span className={`${letterClass} _14`}>'m</span>
              <span className={`${letterClass} _15`}>
                &nbsp;&nbsp;Muhammad
              </span>{' '}
              <br />
              <img src={LogoA} alt="" className="ms-3 w-25" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={16}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>

            <h2 className="mt-3 fs-5">
              Frontend Developer / JavaScript Expert / React Developer
            </h2>
            <Link to="/contact" className="flat-button btn p-3 mt-5 fs-4">
              CONTACT ME
            </Link>
          </div>
          <div className="col-md-6 col-12">
            {/* <Logo /> */}
            <img src={ReactLogo} alt="" className="logo w-50" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
