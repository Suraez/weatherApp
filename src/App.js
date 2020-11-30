import './App.css';
import SearchForm from './components/SearchForm';
import weatherImage from './assets/images/piccky.png'
import styles from './assets/styles/weather.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather';
import { useState } from 'react'

import Axios from "axios"
import AnsModal from './components/ErrorModal';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const APP_ID = '4ee9ff82c3ba7076c0960ecba04ff1e2'

function App() {
  const [city, setCity] = useState('');
  const[weather, setWeather] = useState(null);
  const [error, setError] = useState(false)

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
          setWeather(res.data)
        })
        .catch(err => {
          setError(true);
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
      <AnsModal open={error} onClose={() => setError(false)}>
        <h4>Oops! Couldn't Find the City</h4>
        <h4>Please change the city</h4>
      </AnsModal>
    </div>
  );
}

export default App;
