import React, { Component } from 'react';
import './App.css';
import Header from "../Header";
import Footer from "../Footer";
import Weather from "../Weather";



class App extends Component {
  state =  {
    weather: []
  };

  componentDidMount() {
    this.fetchQuote();
  };

  fetchQuote = () => {
    const Api_Key = 'fbe858c092bd31dfaca263e84ef94abb';

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=gothenburg,sweden&units=metric&appid=${Api_Key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
            this.setState({
      // temperature: data.list.main.temp_max,
      city: data.city.name,
      country: data.city.country,
      main: data.list[0].weather[0].main,
      temperature: data.list[0].main.temp,
      icon: data.list[0].weather[0].icon,
      wind: data.list[0].wind.speed,
      date: data.list[0].dt_txt,

      oneicon: data.list[1].weather[0].icon,
      onetemperature: data.list[1].main.temp_max,
      onewind: data.list[1].wind.speed,
      onedate: data.list[1].dt_txt,

      twoicon: data.list[2].weather[0].icon,
      twotemperature: data.list[2].main.temp_max,
      twowind: data.list[2].wind.speed,
      twodate: data.list[2].dt_txt,

      threeicon: data.list[3].weather[0].icon,
      threetemperature: data.list[3].main.temp_max,
      threewind: data.list[3].wind.speed,
      threedate: data.list[3].dt_txt,

    fouricon: data.list[4].weather[0].icon,
    fourtemperature: data.list[4].main.temp_max,
    fourwind: data.list[4].wind.speed,
    fourdate: data.list[4].dt_txt,
    })
      });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          main={this.state.main}
          icon={this.state.icon}
          wind={this.state.wind}
          date={this.state.date}

          oneicon={this.state.oneicon}
          onetemperature={this.state.onetemperature}
          onewind={this.state.onewind}
          onedate={this.state.onedate}

          twoicon={this.state.twoicon}
          twotemperature={this.state.twotemperature}
          twowind={this.state.twowind}
          twodate={this.state.twodate}

          threeicon={this.state.threeicon}
          threetemperature={this.state.threetemperature}
          threewind={this.state.threewind}
          threedate={this.state.threedate}

        fouricon={this.state.fouricon}
        fourtemperature={this.state.fourtemperature}
        fourwind={this.state.fourwind}
        fourdate={this.state.fourdate}
          />
        <Footer>
        <p><a href="https://openweathermap.org/">https://openweathermap.org/</a></p>
        <p>&copy; {new Date().getFullYear()} Ida Hallner</p>
         </Footer>
      </div>
    );
  }
}

export default App;
