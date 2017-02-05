import Terrain from 'react-icons/lib/md/terrain'
import Snowflake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<td>Date</td>
				<td>Resort</td>
				<td><Snowflake /></td>
				<td><Terrain /></td>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) => (
				<SkiDayRow key={i}
				{...day} />
			))}
		</tbody>
	</table>
)

SkiDayList.propTypes = {
	days: function(props) {
		if (!Array.isArray(props.days)) {
			return new Error("This component should be an Array")
		} else if (!props.days.length) {
			return new Error("A days value is required")
		} else {
			return nulls
		}
	}
}