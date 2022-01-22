const SliderItem = ({ slide, className }) => {
  return (
    <div className={`slider-container ${className}`}>
      <img src={slide.pic} alt="" className="image-slider" />
      <div className="slide-info-container">
        <h2 className="title">{slide.title}</h2>
      </div>
    </div>
  )
}

export default SliderItem
