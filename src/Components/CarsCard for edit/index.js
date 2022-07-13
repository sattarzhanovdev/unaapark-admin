import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { API } from '../../API'
import { useGetCars } from '../../Helpers'
import './Card.scss'

const CarCardForEdit = () => {
  const { base } = useGetCars()

  const isBronedFunc = (id) => {
    API.brone(id, true)
  }
  
  function removeisBronedFunc(id) {
    API.brone(id, 'false')
  }
  
  return (
    <div className='card_container'>
      {
        base
        ? base.map(({ id, model, title, year, photo, price, isBroned }) => (
          <div to={`/carsmore/${id}`} className="cars_card" key={id}>
            {
              isBroned ?
              <button
                style={{
                  width: '35px',
                  height: '35px',
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  border: '1px solid black',
                  borderRadius: '5px',
                  background: 'red',
                  color: 'white',
                  cursor: 'pointer'
                }}
                onClick={() => removeisBronedFunc(id)}
              >
                <AiOutlineClose />
              </button>
              :
              <button
                style={{
                  width: '35px',
                  height: '35px',
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  border: '1px solid black',
                  borderRadius: '5px',
                  background: 'green',
                  color: 'white',
                  cursor: 'pointer'
                }}
                onClick={() => isBronedFunc(id)}
              >
                <TiTick />
              </button>
            }
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

export default CarCardForEdit