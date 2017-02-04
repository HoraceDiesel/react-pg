import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React;

render( 
	<SkiDayList days={
		[
			{
				resort: "Squaw Valley",
				date: new Date("2/1/2017"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("16/1/2017"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt White",
				date: new Date("1/2/2017"),
				powder: false,
				backcountry: true
			}
		]
	}
	 />
	}
	, document.getElementById('react-container'));