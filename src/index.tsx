import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello';
import Message from './components/Message';
import reportWebVitals from './reportWebVitals';
import Parent from './components/Parent';
import Input from './components/Input';
import Page from './components/ContextSample';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
		<Input />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
