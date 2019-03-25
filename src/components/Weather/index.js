import React from 'react';
import PropTypes from "prop-types";
import './Weather.css';
import logo from "./gbg_desktop.jpg";

const Weather = (props) => {
  return(
       <div className="Weather">
         <div className="todays_weather">
          <div className="top">
           <img  className="big_logo" src={logo} alt="logo" width="160" height="160"/>

           <p className="temp">{props.temperature} °C </p>
           </div>
           <div className="info_firstbox">
           <img className="icon" src ={`http://openweathermap.org/img/w/${props.icon}.png`} alt="icon" />
           <p><b>{props.date}</b></p>
           <p><b>Location </b>{props.city}, {props.country}</p>
            <p><b>Weather </b>{props.main}</p>
           <p><b>Wind </b>{props.wind} m/s</p>
           </div>
         </div>
         <div className="future_weather">
         <div className="future_weather_box1">
         <img className="icon" src ={`http://openweathermap.org/img/w/${props.oneicon}.png`} alt="icon" />
            <h4>{props.onedate}</h4>
            <p><b>Temperature</b> {props.onetemperature} °C </p>
            <p><b>Wind</b> {props.onewind} m/s</p>
          </div>
          <div className="future_weather_box2">
          <img className="icon" src ={`http://openweathermap.org/img/w/${props.twoicon}.png`} alt="icon" />
            <h4>{props.twodate}</h4>
            <p><b>Temperature</b> {props.twotemperature} °C </p>
            <p><b>Wind</b> {props.twowind} m/s</p>
            </div>
            <div className="future_weather_box3">
            <img className="icon" src ={`http://openweathermap.org/img/w/${props.threeicon}.png`} alt="icon" />
            <h4>{props.threedate}</h4>
            <p><b>Temperature</b> {props.threetemperature} °C </p>
             <p><b>Wind</b> {props.threewind} m/s</p>
            </div>
            <div className="future_weather_box4">
            <img className="icon" src ={`http://openweathermap.org/img/w/${props.fouricon}.png`} alt="icon" />
            <h4>{props.fourdate}</h4>
            <p><b>Temperature</b> {props.fourtemperature} °C </p>
             <p><b>Wind</b> {props.fourwind} m/s</p>
            </div>
            </div>
        </div>
   )
}

Weather.propTypes = {
  text: PropTypes.string
};

Weather.defaultProps = {
  text: "Error, can not show updates right now."
};

export default Weather;
