import './App.css';
import SearchForm from './components/SearchForm';
import weatherImage from './assets/images/piccky.png'
import styles from './assets/styles/weather.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather';
import { useState } from 'react'

import Axios from "axios"

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const APP_ID = '4ee9ff82c3ba7076c0960ecba04ff1e2'

function App() {
  const [city, setCity] = useState('');
  const[weather, setWeather] = useState(null);

  const getWeatherData = (e) => {
    e.preventDefault();
    Axios.get(BASE_URL, {
              params: {
                  q: city,
                  units: 'metric',
                  appid: APP_ID
              }   
          })
        .then(res => {
          console.log(res.data);
          setWeather(res.data)
        })
        .catch(err => {
          console.log(err)
        })
  }

  return (
    <div className="App">
      <div className={`p-4 shadow ${styles.shadowEffect}`}>
        <div className="flex justify-center">
          <img src={weatherImage} alt="any photo" width="400" />
        </div>
        <div className={`${styles.container}`}>
          <SearchForm city={city} onChangeHandler={setCity} onSubmitHandler={(e) => getWeatherData(e)}/>
        </div>
      </div>
      {weather && <Weather weather={weather}/>} 
    </div>
  );
}

export default App;
