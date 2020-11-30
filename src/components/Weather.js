import React from 'react'
export default function Weather(props) {
    return (
    <div className="max-w-sm m-2 mx-auto flex p-6 bg-dark rounded shadow-xl">
        <div className="flex-shrink-0">
            <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt="image" className="h-12 w-12" />
        </div>
        <div className="ml-6 pt-2">
            <h1 className="text-5xl text-white">{Math.round(props.weather.main.temp)} <sup>&deg;</sup>C</h1>
            <p className="text-base capitalize text-white">
                {props.weather.weather[0].description}
            </p>
            <p className="text-xl text-white">{Math.round(props.weather.main.temp_min)} / {Math.round(props.weather.main.temp_max)}</p>
        </div>
    </div>
    )
}
