import React from 'react'
import { listData } from '../../Lib/dummydata'
import Card from '../Card/Card'
const List = ({listData}) => {
  console.log(listData)
  return (
    <div className='list'>
        {listData.map((item)=>(
            <Card item={item}/>
        ))}
    </div>
  )
}

export default List