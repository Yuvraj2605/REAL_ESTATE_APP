import React from 'react'
import './List.scss'
import Filter from '../../Componants/Filter/Filter'
import Card from '../../Componants/Card/Card'
import { listData } from '../../Lib/dummydata'
import Map from '../../Componants/Map/Map'
import { useLoaderData } from 'react-router-dom'


const List = () => {
 
  const listData = useLoaderData();
  return (
    <div className="lists">

      <div className="leftSide">

        <div className="wrapper">
          <Filter />
        {
          listData.map((item)=><Card item={item}/>)
        }
        </div>

      </div>

      <div className="mapSide">
        <Map item={listData}/>
      </div>

    </div>
  )
}

export default List