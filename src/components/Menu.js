import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddCalendarIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListIcon from 'react-icons/lib/fa/table'

export const Menu = () => (
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<HomeIcon />
		</Link>
		<Link to="/add-day" activeClassName="selected">
			<AddCalendarIcon />
		</Link>
		<Link to="/list-days" activeClassName="selected">
			<ListIcon />
		</Link>
	</nav>
)