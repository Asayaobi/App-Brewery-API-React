import './App.css'
import Header from './Header'
import homeImage from "/home-img.png"
import Footer from './Footer'
import Minter from './Minter'
import Item from './Item'
import nfts from '../data'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(nfts)

  function updateData(newNft){
    console.log(newNft)
    setData([newNft, ...data])
    console.log(data)
  }
  return (
    <>
    <Header />
    <Minter addNft={updateData}/>
{data.map((nft, index) => <Item  key={index} owner={nft.owner} title={nft.title} img=
{nft.img} />)
}    
    <img className="bottom-space" src={homeImage} />
    <Footer />
    </>
  )
}

export default App
