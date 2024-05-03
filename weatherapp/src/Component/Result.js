import React from 'react'

function Result({weatherData,historyData,historySearch}) {
  const historyItems = historyData.map(
    (item,index)=>{
        return <li key={index} className='list' onClick={()=>historySearch(item)}>{item}</li>
    }
  )
  return (
    <div className='res-div'>
      <div className='col-span-1'>
          <span className='span'>History</span>
          <ul>
            {historyItems}
          </ul>
      </div>
      <div className='col-span'>
      {
        weatherData.length !== 0
        ?
        <>
            <h2 className='res-h2'>{weatherData.name}</h2>
            <div className='temp'>
              <div>Maximum Temp : {weatherData.main.temp_max} deg</div>
              <div>Minimum Temp : {weatherData.main.temp_min} deg</div>
            </div>
            <div className='temp'>
              <div>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='' />
              </div>
              <div className='weather-type'>Weather Type : {weatherData.weather[0].main}</div>
            </div>
        </>
        :
        <>
          <h3 className='h3-city'>Please Enter the city Name</h3>
        </>
      }
     
      </div>
         
    </div>
  )
}

export default Result
