import React, { useContext } from 'react'
import { useSlider, VideoContext } from '../../context/VideoContext'
import VideoItem from './VideoItem'
import './VideoItems.scss'

const VideoItems = () => {
  const { state } = useSlider()
  
  return (
    <div className="container-fluid">
      <div className="video-title text-danger">Videos</div>
      <div className="row row-cols-1 row-cols-md-4 g-5 col-12 p-0 m-0">
        {state.items && state.items.length > 0 && state.items.map((item, index) => <VideoItem key={`video-card-${item.id}`} data={item} /> )}
      </div>
    </div>
  )
}

export default VideoItems
