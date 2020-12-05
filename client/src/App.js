import React, {useEffect} from 'react'
import Header from './components/Header'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import {connect} from 'react-redux'
import {fetchUserAction} from './actions/myAction'


function App(props) {
  useEffect(() => {
    props.fetch_user();
  },[])
  return (
    <BrowserRouter className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_user:() => {
      dispatch(fetchUserAction());
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
