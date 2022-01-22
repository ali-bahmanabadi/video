import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../component/menu/Menu'
import './Single.scss'

const Single = () => {
  const { id } = useParams()
  console.log(id)
  const [state, setState] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get(
        `http://previewmysite.pythonanywhere.com/api/movie/${id}`
      )
      if (api.status === 200) {
        setState(api.data)
      }
    }
    fetchData()
  }, [id])

  console.log(state)

  return (
    <div className="container-fluid p-0 single">
      <Menu />
      {state !== undefined && (
        <React.Fragment>
          <img src={state.pic} alt={state.title} />
          <div className="movie-detail container">
            <div className="title">
              {state.title && <span>{state.title}</span>}
              {state.Time && (
                <span className="time">
                  ( {state.Time} ) - {state.release_year}
                </span>
              )}
            </div>
            <div className="detail">
              {state.actors && <div>Actors: {state.actors}</div>}
              {state.director && <div>Director: {state.director}</div>}
              {state.writer && <div>Writer: {state.writer}</div>}
            </div>
            {state.description && (
              <div className="description">{state.description}</div>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default Single
