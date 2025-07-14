import {useState} from "react"
import PropTypes from 'prop-types'
import Button from './Button'
function Item(props) {
  const seller = props.data.owner

  const [priceInput, setPriceInput] = useState()
  const [buttonText, setButtonText] = useState("Sell")
  const [isOnSell, setIsOnSell] = useState(false)
  const [price, setPrice] = useState()
  const [hidden, setHidden] = useState(false)
  const [owner, setOwner] = useState(seller)
  const [blur, setBlur] = useState()

  function handleSell(){
    console.log('sell clicked')
    setPriceInput(<input
        placeholder="Price in ETH"
        type="number"
        className="price-input"
        value={price}
        onChange={(e) => (setPrice(e.target.value))}
      />)
      setButtonText("Confirm")
      setIsOnSell(true)
  }

  function upDateNft(){
    const editNft = { title: props.data.title, img: props.data.img, owner: "openD", price: price }
    console.log(`sellNFT: ${editNft.title} ${editNft.owner} ${editNft.price}`)
    setHidden(true)
    setOwner("openD")
    setBlur({filter:"blur(4px)"})
  }
  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={props.data.img}
          style={blur}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {props.data.title}<span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
            {!props.hideButton && !hidden && (
              <div>
                {priceInput}
                {props.data.owner === "currentUser" && isOnSell ? (
                  <Button handleClick={upDateNft} text={buttonText} />
                ) : (
                  <Button handleClick={handleSell} text={buttonText} />
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
  }).isRequired
}

export default Item
