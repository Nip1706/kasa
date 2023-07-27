import React from 'react'
import {Link} from 'react-router-dom'
import './ErrorPageNotFound.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Main from '../../Layout/Main/Main.jsx'

function ErrorpageNotFound() {
  return (
    <>
    <Navbar />
    <Main>
    <div className='error__page'>
    <h1>404</h1>
    <h2>Oops ! La page que vous demandez n'existe pas</h2>
    <Link to='/'>Retourner sur la page d'accueil</Link>
    </div>
    </Main>
    </>
  )
}

export default ErrorpageNotFound