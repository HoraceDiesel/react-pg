import '../stylesheets/ui.scss'

const decimalToPercent = (decimal) => {
		return ( (decimal * 100 ) + "%");
}

const calcGoalProgress = ( total, goal ) => {
		return decimalToPercent( total / goal );
}

export const SkiDayCounts = ({total, powder, backcountry, goal}) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{total} days</span>
		</div>
		<div className="powder-days">
			<span>{powder} days</span>
		</div>
		<div className="backcountry-days">
			<span>{backcountry} days</span>
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