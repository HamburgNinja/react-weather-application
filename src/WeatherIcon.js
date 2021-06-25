import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconElements = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const iconName = iconElements[props.code];
  let color = "#99A8B2";

  if (iconName === "CLEAR_DAY" || iconName === "PARTLY_CLOUDY_DAY") {
    color = "#FEA82F";
  } else if (iconName === "RAIN") {
    color = "#00587A";
  } else if (iconName === "CLEAR_NIGHT" || iconName === "PARTLY_CLOUDY_NIGHT") {
    color = "#424642";
  }
  return (
    <ReactAnimatedWeather
      icon={iconName}
      color={color}
      size={props.size}
      animate={true}
    />
  );
}
