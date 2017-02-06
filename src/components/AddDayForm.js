import { PropTypes } from 'react'

export const AddDayForm = ({ resort, date, powder, backcountry }) => {

	let _resort, _date, _powder, _backcountry

	const submit = (e) => {
		e.preventDefault()
		console.log( _resort.value , _date.value, _powder.checked, _backcountry.checked )
	}

	return (
		<form className="add-day" onSubmit={submit}>
			<label htmlFor="resort">Resort Name</label>
			<input id="resort" type="text" defaultValue={resort} ref={input => _resort = input} required />
			<label htmlFor="date">Date</label>
			<input id="date" type="date" defaultValue={date} ref={input => _date = input} required />
			<div>
				<input id="powder" type="checkbox" defaultChecked={powder} ref={input => _powder = input} />
				<label htmlFor="powder">Powder Day</label>
			</div>
			<div>
				<input id="backcountry" type="checkbox" defaultChecked={backcountry} ref={input => _backcountry = input} />
				<label htmlFor="backcountry">Backcountry Day</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

AddDayForm.defaultProps = {
	resort: "Resort Name",
	date: "2017-02-06",
	powder: false,
	backcountry: false
}

AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}