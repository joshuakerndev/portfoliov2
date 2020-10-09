import React from 'react';

import { Route } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route 
						exact 
						path='/'
						render={() => <MainPage />}
			/>
      
    </div>
  );
}

export default App;
