import './App.css'
import Header from './Header'
import homeImage from "/home-img.png"
import Footer from './Footer'
import Item from './Item'
import nfts from '../data'

function App() {
  return (
    <>
    <Header />
{nfts.map((nft, index) => <Item  key={index} owner={nft.owner} id={nft.id} artist={nft.artist} img=
{nft.img}/>)
}    
    <img className="bottom-space" src={homeImage} />
    <Footer />
    </>
  )
}

export default App
