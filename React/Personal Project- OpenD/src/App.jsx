import './App.css'
import Header from './Header'
import homeImage from "/home-img.png"
import Footer from './Footer'
import Minter from './Minter'
// import Item from './Item'
// import nfts from '../data'

function App() {
  return (
    <>
    <Header />
    <Minter />
{/* {nfts.map((nft, index) => <Item  key={index} owner={nft.owner} title={nft.artist} img=
{nft.img}/>)
}     */}
    <img className="bottom-space" src={homeImage} />
    <Footer />
    </>
  )
}

export default App
