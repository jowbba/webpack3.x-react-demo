import React from 'react'
import { render }  from 'react-dom'
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom'
import One from './components/one/one'
import Two from './components/two/two'

class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <h2>this is home</h2>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <Link to='/'>to home</Link><br/>
      <Link to='/one'>to one</Link><br/>
      <Link to='/two'>to two</Link><br/>
    
      <Route exact path='/' component={Home}/>
      <Route path='/one' component={One}/>
      <Route path='/two' component={Two}/>
    </div>
  )
}

render((
  <HashRouter>
    <App/>
  </HashRouter>
), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}