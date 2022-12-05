import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderComponentsTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

renderComponentsTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderComponentsTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
