import React from 'react'
import '../stylesheets/ui.scss'

export const SkiDayCounts = React.createClass({
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div>
				<div className="powder-days">
					<span>3 days</span>
				</div>
				<div className="backcountry-days">
					<span>1 days</span>
				</div>
			</div>
		)
	}
});