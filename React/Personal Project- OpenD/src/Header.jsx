import logo from "/logo.png"
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import homeImage from "/home-img.png"
import Minter from "./Minter"
import Gallery from "./Gallery"
import nfts from '../data'
import { useState } from 'react'


function Header() {
  const [data, setData] = useState(nfts)
  const [myNftData, setMyNftData] = useState([])

  function updateData(newNft){
    const nft = {
      id: data.length + 1,
      title: newNft.title,
      img: newNft.img,
      owner: newNft.owner,
      price: 0
    }
    console.log(`create nft id: ${nft.id} ${nft.title}`)
    setData(prevData => [nft, ...prevData])
    setMyNftData(prevData => [nft, ...prevData])
  }

  function updatePrice(nft) {
    setData(prevData =>
      prevData.map(item =>
        item.id === nft.id ? { ...item, price: nft.price, owner: nft.owner } : item
      )
    )
  }

  const discoverData = data.filter(d => d.owner === "OpenD")

  return (
    <BrowserRouter forceRefresh={true}>
    <div className="app-root-1">
      <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
        <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
          <div className="header-left-4"></div>
          <img className="header-logo-11" src={logo} />
          <div className="header-vertical-9"></div>
          <Link to="/">
          <h5 className="Typography-root header-logo-text">OpenD</h5>
          </Link>
          <div className="header-empty-6"></div>
          <div className="header-space-8"></div>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/discover">Discover</Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/minter">Minter</Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/collection">My NFTs</Link>
          </button>
        </div>
      </header>
    </div>
    <Routes>
      <Route path="/" element={<img className="bottom-space" src={homeImage} />}/>
      <Route path="/discover" element={<Gallery title="Discover" data={discoverData} />} />
      <Route path="/minter" element ={<Minter addNft={updateData}/>} />
      <Route path="/collection" element ={<Gallery title="My NFTs" data={myNftData} addPrice={updatePrice}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Header
