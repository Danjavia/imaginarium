'use strict';

// Home component
var Home = React.createClass({

    mixins: [ReactFireMixin],

	getInitialState: function () {
		return {
			items: []
		};
	},

	componentWillMount: function() {
	  	var ref = new Firebase("https://imaginarium.firebaseio.com/items");
  		this.bindAsArray(ref, "items");
	},

	componentDidMount: function () {

		// before unload
		$( window ).bind( 'beforeunload', function () {

		    ga( 'send', {
	            hitType: 'event',
	            eventCategory: 'ClosedSite',
	            eventAction: 'close',
	            eventLabel: 'Site Closed'
	        });

		});
	},

	render: function () {
		return (
			<div className="home">
				<Navbar/>
				<Cards data={this.state.items} />
				<Footer/>
				<Modal />
			</div>
		);
	}
});

// Export component
window.Home = Home;