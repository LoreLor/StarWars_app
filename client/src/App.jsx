
import { faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Characters from './components/characters/Characters'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



function App() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Characters />

      <div className="up">
        <a href="#header">
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </a>
      </div>
      
    </div>
  )
}

export default App
