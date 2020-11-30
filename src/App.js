import './App.css';
import SearchForm from './components/SearchForm';
import weatherImage from './assets/images/piccky.png'
import styles from './assets/styles/weather.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App text-center">
      <div className={`p-4 shadow ${styles.shadowEffect}`}>
        <div>
          <img src={weatherImage} alt="any photo" width="400" />
        </div>
        <div className={`${styles.container}`}>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default App;
