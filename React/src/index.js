import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MSGr from './components/MSGr';
// import Debug from './components/Debug'
import * as serviceWorker from './serviceWorker';
// import UserProvider from './providers/UserProvider';
// import UserContext from './providers/UserProvider'

ReactDOM.render(
  // <React.StrictMode>
  //   <MSGr />
  // </React.StrictMode>,
  // <UserContext>
    <MSGr />,
    // <Debug />,
  // </UserContext>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
