import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'

import store from '@/store/index'

import { RouterProvider } from 'react-router-dom'
import Router from '@/routes/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <Provider store={store}>
      <RouterProvider router={Router()} />
    </Provider>
  </React.Fragment>,
)
