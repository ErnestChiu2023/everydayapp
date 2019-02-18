import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/home'
import ToDoApp from './components/ToDoApp'
import Weather from './components/Weather'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Todo" component={ToDoApp}/>
                <Route path="/Weather" component={Weather}/>
              </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
