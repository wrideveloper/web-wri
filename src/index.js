import React from 'react'
import ReactDOM from 'react-dom'
import AppWithRoute from './AppWithRoute'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<AppWithRoute />, document.getElementById('root'))
registerServiceWorker()
