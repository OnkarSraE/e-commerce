"use client"
import React from 'react'
import Home from '../app/home/page';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
  
  <Home/>
  
  
  </Provider>
  )
}

export default App