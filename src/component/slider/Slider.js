import React, { useEffect, useState } from 'react'
import './Slider.scss'
import SliderItem from './SliderItem'
import ChangeSlide from './ChangeSlide'
import { types, useSlider } from '../../context/VideoContext'
import axios from 'axios'
import Menu from '../menu/Menu'

const Slider = () => {
  const { state, dispatch, nextSlide, previousSlide } = useSlider()

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get(
        'http://previewmysite.pythonanywhere.com/api/movies/'
      )
      if (api.status === 200) {
        dispatch({type: types.SET_ITEMS, items: api.data})
        // console.log(api)
      }
    }
    fetchData()
  }, [dispatch])

  useEffect(() => {
    let sliderTimeoutHandler = undefined
    sliderTimeoutHandler = setTimeout(() => {
      nextSlide()
    }, 8000)
    return () => {
      clearTimeout(sliderTimeoutHandler)
    }
  })

  return (
    <div className="col-12 p-0 slider">
      {state.items &&
        state.items.length > 0 &&
        state.items.map((sliderItem, index) => (
          <SliderItem
            key={`slider-${sliderItem.id}`}
            slide={sliderItem}
            className={
              state.currentSlide === index
                ? 'active'
                : state.previousSlide === index
                ? 'previous'
                : ''
            }
          />
        ))}
      <Menu />
      <ChangeSlide back={previousSlide} next={nextSlide} />
    </div>
  )
}

export default Slider
