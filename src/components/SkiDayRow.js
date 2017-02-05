import Terrain from 'react-icons/lib/md/terrain'
import Snowflake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
	<tr>
		<td>
			{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
		</td>
		<td>
			{resort}
		</td>
		<td>
			{(powder) ? <Snowflake /> : null}
		</td>
		<td>
			{(backcountry) ? <Terrain /> : null}
		</td>
	</tr>
)