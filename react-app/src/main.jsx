import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
