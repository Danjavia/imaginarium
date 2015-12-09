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

        // e.preventDefault();

        // var author = this.refs.email.value.trim();
        // var text = this.refs.password.value.trim();

        // // form validation goes here
        // if ( ! text || ! author ) {
        //   return;
        // }

        // // send request to the server
        // $.ajax({
        //     type: "POST",
        //     dataType: 'json',
        //     url: '/api/users',
        //     data: {
        //         email: _email,
        //         password: _password
        //     },
        //     success: function(data) {
        //         console.log('data');
        //         var _token = data.token;
        //         var _decoded = jwt_decode(_token);

        //         // decoded data from our JSON web token
        //         console.log(_decoded);
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.error(this.props.url, status, err.toString());
        //     }.bind(this)
        // });

        // console.log( 'form submitted!' );
        // // TODO: send request to the server
        // this.refs.email.value = '';
        // this.refs.password.value = '';
        // return;

    },

    registerUser: function ( e ) {

        e.preventDefault();

        var ref = new Firebase( this.state.refUrl );

        ref.createUser({

            email    : this.refs.email.value.trim(),
            password : this.refs.password.value.trim()

        }, function( error, userData ) {

            if ( error ) {

                console.log( "Error creating user:", error );

            } else {

                console.log( "Successfully created user account with uid:", userData.uid );
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
                                    <i className="material-icons right">account_box</i>
                                </button>
                                <button className="btn blue waves-effect waves-light action-button" type="submit" name="action" onClick={this.registerUser}>Sign up
                                    <i className="material-icons right">account_box</i>
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