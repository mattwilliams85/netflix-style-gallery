import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../../containers/homeContainer'

const App = () => (
  <div className="App--root">
    <header>
      <a href="https://www.netflix.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
      </a>
      <span>UI Test</span>
    </header>
    <div></div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </main>
  </div>
)

export default App
