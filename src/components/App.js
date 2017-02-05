import { Component } from 'react'
import { SkiDayList} from './SkiDayList'
import { SkiDayCounts} from './SkiDayCounts'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
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
		}
	}
	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter((day) => 
			(filter) ? day[filter] : day
		).length
	}
	render() {
		return (
			<div className="app">
				<SkiDayList days={this.state.allSkiDays}/>
				<SkiDayCounts total={this.countDays()}
								powder={this.countDays("powder")}
								backcountry={this.countDays("backcountry")}
				/>
			</div>
		)
	}
}