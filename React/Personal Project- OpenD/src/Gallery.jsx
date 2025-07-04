import Item from "./Item"
import PropTypes from 'prop-types'

function Gallery(props) {
  // console.log(`gallery props ${props}`)
  return (
    <div className="gallery-view">
      <h3 className="makeStyles-title-99 Typography-h3">My NFTs</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2">
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center">
            {props.data && props.data.map((d,index) => <Item key={index} data={d}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired
    })
  ).isRequired
}
export default Gallery
