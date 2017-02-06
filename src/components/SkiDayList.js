import Terrain from 'react-icons/lib/md/terrain'
import Snowflake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow'
import { Link } from 'react-router'

export const SkiDayList = ({days, filter}) => {

	const filteredDays = (
		(!filter)||(!filter.match(/powder|backcountry|others/)) ?
		days : (filter.match(/powder|backcountry/)) ?
		days.filter((day) => day[filter]) : days.filter((day) => !day["powder"] && !day["backcountry"])
	)

	return (
		<div className="ski-day-list">
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Resort</th>
						<th><Snowflake /></th>
						<th><Terrain /></th>
					</tr>
					<tr>
						<td colSpan={4}>
							<Link to="/list-days">
								All Days
							</Link>
							<Link to="/list-days/powder">
								Powder Days
							</Link>
							<Link to="/list-days/backcountry">
								Backcountry Days
							</Link>
							<Link to="/list-days/others">
								Other Days
							</Link>
						</td>
					</tr>
				</thead>
				<tbody>
					{filteredDays.map((day, i) => (
						<SkiDayRow key={i}
						{...day} />
					))}
				</tbody>
			</table>
		</div>
	)
}

SkiDayList.propTypes = {
	days: function(props) {
		if (!Array.isArray(props.days)) {
			return new Error("This component should be an Array")
		} else if (!props.days.length) {
			return new Error("A days value is required")
		} else {
			return null
		}
	}
}