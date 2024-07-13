import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import './index.css'


export const baseUrl ='https://dolphin-app-fmayj.ondigitalocean.app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Toaster position="bottom-center"
          reverseOrder={false} />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
