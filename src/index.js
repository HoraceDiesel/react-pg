import React from 'react'
import { render } from 'react-dom'
import { SkiDayCounts } from './components/SkiDayCounts.js'

window.React = React;

render( 
	<SkiDayCounts />
	, document.getElementById('react-container'));