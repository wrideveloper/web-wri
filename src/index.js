import React from 'react'
import ReactDOM from 'react-dom'
import AppWithRoute from './AppWithRoute'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import 'animate.css/animate.min.css'

ReactDOM.render(<AppWithRoute />, document.getElementById('root'))
registerServiceWorker()
