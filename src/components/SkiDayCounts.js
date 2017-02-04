import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import Snowflake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

const decimalToPercent = (decimal) => {
		return ( (decimal * 100 ) + "%");
}

const calcGoalProgress = ( total, goal ) => {
		return decimalToPercent( total / goal );
}

export const SkiDayCounts = ({total, powder, backcountry, goal}) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{total} </span><Calendar /><span>days</span>
		</div>
		<div className="powder-days">
			<span>{powder} </span><Snowflake /><span>days</span>
		</div>
		<div className="backcountry-days">
			<span>{backcountry} </span><Terrain /><span>days</span>
		</div>
		<div>
			<span>
				{calcGoalProgress(
					total,
					goal
				)}
			</span>
		</div>
	</div>
)