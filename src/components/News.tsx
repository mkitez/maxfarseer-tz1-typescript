import * as React from 'react'
import { IProps } from '../containers/NewsContainer'

const News = ({ data }: IProps) => {
  return (
    <div className={'news-list'}>
      {data.length ? <p>"отрисовка новостей"</p> : <p>Новостей нет</p>}
    </div>
  )
}

export default News
