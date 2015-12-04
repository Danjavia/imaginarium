'use strict';

// Home component
var Navbar = React.createClass({

	getInitialState: function () {
		return {};
	},

	render: function () {
		return (
			<nav className="indigo darken-3">
	            <div className="nav-wrapper container">
	                <a href="#!" className="brand-logo">Imaginarium</a>
	                <ul className="right hide-on-med-and-down">
	                    <li><a href="#">Coming Soon</a></li>
	                    <li><a href="#">My Favorites</a></li>
	                </ul>
	            </div>
	        </nav>
		);
	}
});

// Export component
window.Navbar = Navbar;