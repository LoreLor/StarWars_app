
import { faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Characters from './components/characters/Characters'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  

  return (
    <div className='App'>
      <Navbar />
      <div className="section_padding"></div>
      <Header />
      <div className="section_padding"></div>
      <Characters />
      <div className="up">
        <a href="#intro">
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </a>
      </div>
    </div>
  )
}

export default App
