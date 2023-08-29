import './index.css'

const ThumbnailItem = props => {
  const {details, onClickThumbnail} = props
  const {thumbnailUrl, id} = details

  const onClickTh = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnailItem">
      <button className="thumbutt" type="button" onClick={onClickTh}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
