import './App.css'
import Header from './Header'
import homeImage from "/home-img.png"
import Footer from './Footer'

function App() {

  return (
    <>
    <Header />
    <img className="bottom-space" src={homeImage} />
    <Footer />
    </>
  )
}

export default App
