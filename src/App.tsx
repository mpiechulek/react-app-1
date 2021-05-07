import React from 'react';
import './App.scss';
import HomeScreen from './pages/page/HomeScreen/HomeScreen';
import ContentScreen from './pages/page/ContentScreen/ContentScreen';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/page/Login/Login';
import Header from './components/Header/Header';
import NotFound from './pages/page/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>

      <div className="main">

        <div className="main__container">

          <Header />

          <Switch>

            <Route path='/' component={HomeScreen} exact />

            <Route path='/content' component={ContentScreen} exact />

            <Route path='/login' component={Login} exact />

            <Route path='' component={NotFound} />

          </Switch>

          <Footer/>

        </div>

      </div>

    </Router>
  );
}

export default App;
