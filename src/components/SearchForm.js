import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from '../assets/styles/search.module.css'
export default function SearchForm(props) {
  return (
    <div className="d-flex justify-center m-2">
      <form onSubmit={props.onSubmitHandler} className="d-flex">
        <div className="form-group">
          <input
            type="text"
            name="q"
            id="q"
            className="form-control"
            placeholder="Enter City Name"
            onChange={(e) => props.onChangeHandler(e.target.value)}
          />
        </div>
        <div className={styles.searchIcon}>
          <button
            type="submit"
            className={`m-2 bg-white ${styles.searchButton}`}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
}
