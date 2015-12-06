'use strict';

// Home component
var LoginForm = React.createClass({

    getInitialState: function () {
        return {

        };
    },

    sendData: function ( e ) {

        e.preventDefault();

        console.log( 'aloha in!' );

        $.ajax({

        });

    },

    render: function () {
        return (
            <div className="col x12 m6 l3" id="login-form">
                <div className="row center-align">
                    <form className="col s12 m12 l12" onSubmit={this.sendData}>
                        <div className="row">
                            <h3>Sign In</h3>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <i className="material-icons prefix">account_box</i>
                                <input id="email" type="email" className="validate"/>
                                <label for="email" data-error="wrong" data-success="right">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <i className="material-icons prefix">lock</i>
                                <input id="password" type="password" className="validate"/>
                                <label for="password" data-error="wrong" data-success="right">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Sign in
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                
        );
    }
});

// Export component
window.LoginForm = LoginForm;