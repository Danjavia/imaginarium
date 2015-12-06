'use strict';

// Home component
var Login = React.createClass({

    getInitialState: function () {
        return {

        };
    },

    render: function () {
        return (
            <div className="login">
                <Navbar />
                <LoginForm />
                <Footer />
            </div>
        );
    }
});

// Export component
window.Login = Login;