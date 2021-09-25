import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Scaffold from './components/Scaffold'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import reportWebVitals from './reportWebVitals'
import { fetchRestaurantData } from './store/restaurant/restaurantReducer'

// pages
import Home from './pages/Home'
import List from './pages/List'
import ListDetail from './pages/ListDetail'
import PageNotFound from './pages/404'

import './theme/index.css'

store.dispatch(fetchRestaurantData())

/**
 * The main app entrypoint
 */
const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Scaffold>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" exact component={List} />
            <Route path="/list/:id" component={ListDetail} />
            <Route path="**" component={PageNotFound} />
          </Switch>
        </Scaffold>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
