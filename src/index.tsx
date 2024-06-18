import React from 'react';
import ReactDOM from 'react-dom/client';
import 'the-new-css-reset/css/reset.css';
import './index.css';
import CardProps from './components/CardProps/CardProps';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main>
      <CardProps></CardProps>
      <CardProps name='TV LG 43QNED80T3A' price={21249} imgName='lg-43qned80t3a.jpg'></CardProps>
      <CardProps name='TV Sony KD43X75W' price={25599} imgName='800-4548736150331_h_f_l_0.jpg'></CardProps>

    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();