import React, { useRef } from 'react'

export default function Search(props) {
  const searchInput=useRef();
  return (
    <div className='main-search'>
        <input type='search' value={props.searchData} onChange={() => props.eventHandler(searchInput.current.value)} className='input' ref={searchInput}/>
        <button className='btn' onClick={props.searchWeather}>Search</button>
    </div>
  )
}


