import React from 'react'
import cls from './Static.module.scss'
import ProgressCircle from '../ProgressCircle/ProgressCircle'
import BetweenTitle from '../TitleForStatics/BetweenTitle'
import { useGetCars } from '../../Helpers'

const Static = () => {
  const { base } = useGetCars()

  return (
    <React.Fragment>
      <div className={cls.statistics}>
        <BetweenTitle color="black" />
        <div className={cls.stat_block}>
          {
            base && base.map(base => <ProgressCircle percentage={base.maxSpeed} article="км" />).slice(0, 1)
          }
          <p>МАХ.Скорость</p>
        </div>
        <div className={cls.stat_block}>
          {
            base && base.map(base => <ProgressCircle percentage={base.power} article="л.с" />).slice(0, 1)
          }
          <p>Мощность двигаетеля</p>
        </div>
        <div className={cls.stat_block}>
          {
            <ProgressCircle percentage={43} article="л" />
          }
          <p>Объем топливного бака</p>
        </div>
        <div className={cls.stat_block}>
          {
            <ProgressCircle percentage={289} article="" />
          }
          <p>Общая мощность</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Static
