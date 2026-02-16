import './style.css'
import About from '../../assets/about.png'
import Work from '../../assets/WORK.png'
import Links from '../../assets/LINKS.png'
import Contact from '../../assets/CONTACT.png'


function HomePage() {

  return (
    <>
        <div className='container'>
            <button id='about'>
                <img src={About}/>
            </button>

            <button id='work'>
                <img src={Work}/>
            </button>

            <button id='links'>
                <img src={Links}/>
            </button>

            <button id='contact'>
                <img src={Contact}/>
            </button>

        </div>
    </>
  )
}

export default HomePage
