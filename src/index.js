import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import configureAppStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';
import { configureI18N } from './config/I18nConfig';

const store = configureAppStore({});
//registerStore(store);

console.log("configureI18N", configureI18N);
configureI18N()
    .then(x=>
        {
          ReactDOM.render(
            <React.StrictMode>
              <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                  <App />
                </I18nextProvider>
              </Provider>
            </React.StrictMode>,
            document.getElementById('root')
          );
        });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
