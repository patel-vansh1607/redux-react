import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

const container = ReactDOM.createRoot(document.getElementById('root'));

const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)