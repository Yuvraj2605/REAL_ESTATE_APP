import React from 'react'
import { listData } from '../../Lib/dummydata'
import Card from '../Card/Card'
const List = ({listData}) => {

  return (
    <div className='list'>
        {listData.map((item)=>(
            <Card item={item}/>
        ))}
    </div>
  )
}

export default List