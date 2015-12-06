'use strict';

// Home component
var Home = React.createClass({

	getInitialState: function () {
		return {
			items: []
		};
	},

	componentDidMount: function () {

		$.getJSON( "data/items.json", function( data ) {

			if ( this.isMounted() ) {
		        this.setState({ 
		        	items: data.items
		        });
		    }

		}.bind( this ));

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