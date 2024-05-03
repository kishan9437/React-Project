import './App.css';
import Search from './Component/Search'
import Result from './Component/Result'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState([]);
  const [history,setHistory]=useState([]);

  const changeSearch = (value) =>{
      setSearch(value);
  }

  const searchWeatherHandler=()=>{
    if(search !== ""){
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=df47f759c745a6dad1ba6b67872893ee&units=metric`
      )
      .then((Response)=>{
        if(history.indexOf(search)===-1){
          setHistory([
            ...history,search
          ])
        }
          //console.log(Response.data);
        setWeather(Response.data)
      }).catch((error)=>{
          console.log(error);
      })
    }
    
  }

  const historySearchHandler = async (data)=>{
    setSearch(data);
    if(data !== ""){
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=df47f759c745a6dad1ba6b67872893ee&units=metric`
      )
      .then((Response)=>{
        if(history.indexOf(data)===-1){
          setHistory([
            ...history,data
          ])
        }
          //console.log(Response.data);
        setWeather(Response.data)
      }).catch((error)=>{
          console.log(error);
      })
    }
    //searchWeatherHandler();
  }

  return (
    <div className="homeWrape">
        <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler}/>
        <Result weatherData={weather} historyData={history} historySearch={historySearchHandler}/>
    </div>
  );
}

export default App;
