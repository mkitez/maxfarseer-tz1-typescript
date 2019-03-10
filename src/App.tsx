import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import CssBaseline from 'material-ui/CssBaseline'
import Home from './components/Home'
import LinkBtn from './components/LinkBtn'
import NotFound from './components/NotFound'
import LoginContainer from './containers/LoginContainer'
import NewsContainer from './containers/NewsContainer'
import PrivateRoute from './containers/PrivateRoute'
import ProfileContainer from './containers/ProfileContainer'
import './App.css'

const App = () => (
  <CssBaseline>
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkBtn to="/" label={'Главная'} />
          <LinkBtn to="/profile" label={'Профиль'} />
          <LinkBtn to="/news" label={'Новости'} />
          <LinkBtn to="/abra-kadabra" label={'404'} />
          <LinkBtn to="/login" label={'Логин'} />
        </div>
      </header>

      <hr />
      <div className="content">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/news" component={NewsContainer} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </CssBaseline>
)

export default App
