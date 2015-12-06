'use strict';

// Home component
var Test = React.createClass({

    getInitialState: function () {
        return {
        };
    },

    render: function () {
        return (
            <div className="login">
                <Navbar />
                <div className="col x12 m6 l3" id="login-form">
                    <div className="row center-align">
                        <form className="col s12 m12 l12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_box</i>
                                    <input id="email" type="email" className="validate"/>
                                    <label for="email" data-error="wrong" data-success="right">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="password" type="password" className="validate"/>
                                    <label for="password" data-error="wrong" data-success="right">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
                
        );
    }
});

// Export component
window.Test = Test;