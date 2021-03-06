'use strict';

// Cards component
var Cards = React.createClass({

    getInitialState: function () {
        return {
            refUrl: "https://imaginarium.firebaseio.com",
            authData: null
        };
    },

    componentDidMount: function () {

        var ref = new Firebase( this.state.refUrl ),
            authData = ref.getAuth();

        // Set user data into the component
        if ( this.isMounted() ) {
            this.setState({ auth: authData });
        }
    },

    render: function () {

        var cards = this.props.data.map( function( data, i ) {
            return (
                <Card data={data} key={i}/>
            );
        });

        return (
            <div className="items-area">
                <h1 className="center-align">Imaginarium</h1>
                <h4 className="center-align">Download and save your favorite images</h4>

                <div className="row container cards">
                    {cards}
                </div>
            </div>
        );
    }
});

// Export component
window.Cards = Cards;