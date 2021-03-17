import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './store'
import App from './App'

import './css/tailwind.css';
import './css/main.css';
import './css/animate.css';
import './css/_components.css';


export default ReactDOM.render(
  (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App/>
      </Suspense>
  </Provider>),
   document.getElementById('root') || document.createElement('div') // for testing purposes
);