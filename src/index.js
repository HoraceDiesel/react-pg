import React from 'react'
import { render } from 'react-dom'
import { SkiDayCounts } from './components/SkiDayCounts.js'

window.React = React;

render( 
	<SkiDayCounts 
		total={50}
		powder={20}
		backcountry={10}
		goal={200}
	 />
	, document.getElementById('react-container'));