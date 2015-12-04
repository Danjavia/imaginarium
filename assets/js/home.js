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
	},

	render: function () {
		return (
			<div className="home">
				<Navbar/>
				<Cards data={this.state.items} />
				<Footer/>
			</div>
		);
	}
});

// Export component
window.Home = Home;