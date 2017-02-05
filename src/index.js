import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/App'

window.React = React;

render( 
	<App />
	, document.getElementById('react-container'));