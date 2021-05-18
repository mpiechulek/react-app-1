import React , {lazy, Suspense} from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadingScreen from './pages/page/LoadingScreen/LoadingScreen';

/**
 * Lazy loading 
 */
const HomeScreen = lazy(() => import('./pages/page/HomeScreen/HomeScreen'));
const ContentScreen = lazy(() => import('./pages/page/ContentScreen/ContentScreen'));
const Login = lazy(() => import('./pages/page/Login/Login'));
const NotFound = lazy(() => import('./pages/page/NotFound/NotFound'));
const UserPage = lazy(() => import('./pages/page/UserPage/UserPage'));

function App() {

  return (

    <AuthContextProvider>

      <Router>   

          <div className="main__container">         

            <Header />

            <main>

            <Suspense fallback={<LoadingScreen/>}>

              <Switch>

                <Route path='/' component={HomeScreen} exact />

                <Route path='/home' component={HomeScreen} exact />

                <Route path='/content' component={ContentScreen} exact />

                <Route path='/login' component={Login} exact />

                <Route path='/user' component={UserPage} exact />

                <Route path='' component={NotFound} />

              </Switch>

            </Suspense>

            </main>

            <Footer />

          </div>
     
      </Router>

    </AuthContextProvider>
  );
}

export default App;
