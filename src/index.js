import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import MessageApp from "./MessageApp"; <MessageApp />
import PersonContextProvider from './contexts/PersonContextProvider';
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import("./App"));
const NavegationBar = lazy(() => import("./components/navegationbar"))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonContextProvider>
      <Suspense fallback={<span>carregando...</span>}>
        <NavegationBar />
        <App />
      </Suspense>
      
    </PersonContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
