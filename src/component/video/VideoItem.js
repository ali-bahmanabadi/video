import { Link } from "react-router-dom"


const VideoItem = ({data}) => {
  const url = data.title.replace(" ", "-")
  return (
    <div className="col">
      <div className="card">
        <img
          src={data.pic}
          alt={data.title}
          className="video-poster"
        />
        <div className="card-body">
          <Link to={`/${data.id}/${url}`}>
            <h5 className="card-title text-white">{data.title}</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VideoItem
