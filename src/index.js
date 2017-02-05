import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'
import { SkiDayCounts } from './components/SkiDayCounts'

window.React = React;

// render(
// 	<SkiDayCounts
// 				powder={10}
// 				backcountry={20}
// 				goal={100} />
// , document.getElementById('react-container'));

render( 
	<SkiDayList days={
		[
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2017"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("1/16/2017"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt White",
				date: new Date("2/3/2017"),
				powder: false,
				backcountry: true
			}
		]
	}/>
	, document.getElementById('react-container'));