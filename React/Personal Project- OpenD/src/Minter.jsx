import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import Item from "./Item"
import PropTypes from "prop-types"



function Minter(props) {
  const { register, handleSubmit, watch } = useForm()
  const [img, setImg] = useState(null)
  const [isMinted, setIsMinted] = useState(null)
  const [loaderHidden, setLoaderHidden] = useState(true)

  const watchImage = watch("image")

  useEffect(() => {
    // When file input changes, update local img state
    if (watchImage && watchImage.length > 0) {
      setImg(watchImage[0])
    }
  }, [watchImage])

  const onSubmit = (data) => {
    setLoaderHidden(false)
    // console.log("Form Data:", data.name)//Form Data: {image: FileList, name: 'Cryptoduck001'}
    // console.log("Image file object:", img.name) //cryptodunk5.png
    const imageUrl = URL.createObjectURL(img)

    const newNft = {
      title: data.name,
      img: imageUrl,
      owner: "currentUser"
    }

    props.addNft(newNft)
    setIsMinted({ title: data.name, img: imageUrl })
    setLoaderHidden(true)
  }

  if (!isMinted){
      return (
    <div className="minter-container">

      {/* loader */}
      <div className="lds-ellipsis" hidden ={loaderHidden}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
        Create NFT
      </h3>

      <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
        Upload Image
      </h6>

      <form className="makeStyles-form-109" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <div className="upload-container">
          <input
            {...register("image", { required: true })}
            className="upload"
            type="file"
            accept="image/png, image/jpeg, image/gif, image/svg+xml, image/webp"
          />
        </div>

        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          Collection Name
        </h6>

        <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
          <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
            <input
              {...register("name", { required: true })}
              placeholder="e.g. CryptoDunks"
              type="text"
              className="form-InputBase-input form-OutlinedInput-input"
            />
            <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline" />
          </div>
        </div>

        <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable">
          <button type="submit" className="form-Chip-label">
            Mint NFT
          </button>
        </div>
      </form>
    </div>
  )
  } else {
    return (
      <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Minted!
        </h3>
          <div className="horizontal-center">
          <Item owner="currentUser" title={isMinted.title} img={isMinted.img}/>
        </div>
      </div>
    )
  }
}

Minter.propTypes = {
  addNft: PropTypes.func.isRequired,
}
export default Minter
