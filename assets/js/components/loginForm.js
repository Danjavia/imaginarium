'use strict';

var OAUTH = 'WbekgyPe55xRsg6GeQwnSM4J4rYk2WXVn80uXDw2';

// Home component
var LoginForm = React.createClass({

    getInitialState: function () {
        return {
            refUrl: 'https://imaginarium.firebaseio.com' 
        };
    },

    handleSubmit: function ( e ) {

        e.preventDefault();

        var ref = new Firebase( this.state.refUrl );

        ref.authWithPassword({

            email    : this.refs.email.value.trim(),
            password : this.refs.password.value.trim()
        
        }, function( error, authData ) {

            if ( error ) {

                console.log( 'Login Failed!', error );
                Materialize.toast( 'Login Failed!', 4000 );
        
            } else {

                localStorage.auth = true;
                
                $( '#loginModal' ).closeModal();

                location.href = '/#/favorites';

                console.log( "Authenticated successfully with payload:", authData);

            }
        });

    },

    registerUser: function ( e ) {

        e.preventDefault();

        var ref = new Firebase( this.state.refUrl );

        ref.createUser({

            email    : this.refs.email.value.trim(),
            password : this.refs.password.value.trim()

        }, function( error, userData ) {

            if ( error ) {

                console.log( 'Error creating user:', error );
                Materialize.toast( 'Something fail creating the user.', 4000 );

            } else {

                localStorage.auth = true;

                location.href = '/#/favorites';

                Materialize.toast( 'Welcome to Imaginarium.', 4000 );

                console.log( 'Successfully created user account with uid:', userData.uid );
            }
        });

    },

    render: function () {
        return (
            <div className="col x12 m6 l3" id="login-form">
                <div className="row center-align">
                    <form className="col s12 m12 l12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <h3>Sign In</h3>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <i className="material-icons prefix">account_box</i>
                                <input id="email" ref="email" type="email" className="validate"/>
                                <label for="email" data-error="Check ur email" data-success="right">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <i className="material-icons prefix">lock</i>
                                <input id="password" ref="password" type="password" className="validate"/>
                                <label for="password" data-error="wrong" data-success="right">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12 l12">
                                <button className="btn waves-effect waves-light action-button" type="submit" name="action" onClick={this.handleSubmit}>Sign in
                                    <i className="material-icons right">lock</i>
                                </button>
                                <button className="btn blue waves-effect waves-light action-button" type="submit" name="action" onClick={this.registerUser}>Sign up
                                    <i className="material-icons right">account_circle</i>
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