import Item from "./Item"

function Gallery(props) {
  // console.log(`gallery props ${props}`)
  return (
    <div className="gallery-view">
      <h3 className="makeStyles-title-99 Typography-h3">Discover</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2">
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center"></div>
          {props.data && props.data.map((d,index) => <Item key={index} data={d}/>)}
        </div>
      </div>
    </div>
  )
}

export default Gallery
