import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../API'
import { useGetCars } from '../../Helpers'
import './Card.scss'

const CarCard = () => {
  const { base } = useGetCars()

  return (
    <div className='card_container'>
      {
        base
        ? base.map(({ id, model, title, year, photo, price }) => (
          <div to={`/carsmore/${id}`} className="cars_card" key={id}>
            <div className="card_body">
              <div className="card_img">
                <Link to={`/carsmore/${id}`}>
                  <img src={photo.url ? photo.url : 'http://wallpaperlepi.com/wp-content/uploads/2014/09/Bugatti-Veyron-Sport-Wallpaper-Car.jpg'} alt={title} />
                </Link>
              </div>
              <div className='card_title'>
                <h1>{title}</h1>
                <h2>{model}</h2>
                <h4>{year}</h4>
                <h4>{price} $ в сутки</h4>
              </div>
            </div>
            <div className="card_footer">
              <Link className='card_footer_btn' to={`/carsmore/${id}`}>Детали</Link>
              <button
                className='card_footer_btn'
                onClick={() => {
                  API.delete(id)
                }}
                style={{
                  background: 'red'
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))
        :
        <h1>Ничего не найдено!</h1>
      }
    </div>
  )
}

export default CarCard