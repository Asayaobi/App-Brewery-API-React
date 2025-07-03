import './App.css'
import Header from './Header'
import homeImage from "/home-img.png"

function App() {

  return (
    <>
    <Header />
    <img className="bottom-space" src={homeImage} />
    </>
  )
}

export default App
