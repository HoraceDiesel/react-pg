import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { Router, Route, hashHistory} from 'react-router'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/App'
import { Html404 } from './components/Html404'

window.React = React;

render( 
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/list-days" component={App}>
			<Route path=":filter" comsponent={App} />
		</Route>
		<Route path="/add-day" component={App} />
		<Route path="*" component={Html404} />
	</Router>
	, document.getElementById('react-container'));