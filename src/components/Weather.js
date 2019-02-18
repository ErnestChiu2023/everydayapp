import React, {Component} from 'react'
import axios from 'axios'


class Weather extends Component {
  state = {
    data: []
  }
  componentDidMount(){
    axios.get('https://api.openweathermap.org/data/2.5/forecast?id=6176823&APPID=8bd9732f6ecacecd23a2be3d27f21604')
    .then(info => {
        console.log(info);
        this.setState({
          data: info.data.list.slice(5,30)
        })
    })
  }
  convertToCelcius(x){
    return Math.round(x-273.15);
  }
  render(){
    let data = this.state.data;
    const weather = data.length ? (
        data.map(info => {
        return (
            <div className="collection center">
              <h4>Data: {info.dt_txt.substring(0,10)}, Time: {info.dt_txt.substring(10, 16)}</h4>
              <h4>Average Temperature: {this.convertToCelcius(info.main.temp)}&#8451;, &nbsp;
                  Min Temp: {this.convertToCelcius(info.main.temp_min)}&#8451;, &nbsp;
                  Max Temp: {this.convertToCelcius(info.main.temp_max)}&#8451;</h4>
              <h4>There will be {info.weather[0].description} during this time.</h4>
            </div>
        )
      })
    ) : (
      <p> There is no current data available </p>
    )

    return(
        <div>
          <h1 className="center">Weather</h1>
          <h3 className="center">The temperature in Waterloo today: </h3>
          { weather }
        </div>
    )
  }
}

export default Weather
