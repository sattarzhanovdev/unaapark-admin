import React from 'react'
import cls from './CarsMore.module.scss'
import { Link, useParams } from 'react-router-dom'
import { IoReturnUpBack } from 'react-icons/io5'
import Static from '../../Components/Static'
import Slider from '../../Components/Slider/Slider'
import { API } from '../../API'


const CarsMore = () => {
    const { id } = useParams()
    const [base, setBase] = React.useState(null)

    const url = window.location.href

    console.log(url);

    React.useEffect(() => {
        API.get()
            .then(res => {
                const result = Object
                    .entries(res.data)
                    .map(([key, value]) => {
                        return {
                          id: key,
                          ...value
                        }
                    })

                setBase(result)
                result.filter(item => item.id === id ? setBase(item) : '')
            })

    }, [])

    if (!base) return <h1>Ничего не найдено!</h1>
    return (
        <>
          <Slider img={base.photo} />
            <div className={cls.container}>
                <div className={cls.cars_card}>
                    <div className={cls.card_body}>
                        <h1>{base.title}</h1>
                        <h2>{base.model}</h2>
                        <ul className={cls.card_list}>
                          <li><span>Год выпуска: </span>{base.year}</li>
                          <li><span>Коробка передачи: </span>{base.transmission}</li>
                          <li><span>Тип кузова:</span> {base.type}</li>
                          <li><span>Объем двигателя:</span> {base.fuel}</li>
                          <li><span>Цвет машины:</span> {base.color}</li>
                          <li><span>Тип топлива:</span> {base.gas}</li>
                        </ul>
                        <div className={cls.list_price}>
                            <p>Цена: </p>
                            <span>{base.price} $</span>
                            <p>/ сутки</p>
                        </div>
                        <div className={cls.buttons}>
                          <button className={cls.btn} onClick={() => {
                            window.open('https://t.me/sattarzanov')
                          }}
                          >
                            Забронировать
                          </button>
                        </div>
                    </div>
                </div>
                <Static />
                <div className={cls.buttons2}>
                  <Link to={'/cars'} className={cls.btn2}><IoReturnUpBack /></Link>
                </div>
            </div>
        </>
    )
}

export default CarsMore