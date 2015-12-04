'use strict';

var CardImage = React.createClass({
    render: function () {
        return (
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={this.props.image}/>
            </div>
        );
    }
});

var CardContent = React.createClass({
    render: function () {
        return (
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
                <p><a href={this.props.link}>View more about this</a></p>
            </div>
        );
    }
});

var CardActions = React.createClass({

    sendSaved: function ( e ) {

        e.preventDefault();

        ga( 'send', {
            hitType: 'event',
            eventCategory: 'Button',
            eventAction: 'click',
            eventLabel: 'Saving the ' + this.props.action.item + ' into Favorites'
        });
    },

    download: function ( e ) {

        ga( 'send', {
            hitType: 'event',
            eventCategory: 'Button',
            eventAction: 'click',
            eventLabel: 'Download Image' + this.props.action.item
        });

    },

    render: function () {
        return (
            <div className="card-action">
                <a className="saveTo" data-id={this.props.action.item} onClick={this.sendSaved}><i className="fa fa-heart"></i> Fav</a>
                <a href={this.props.action.link} download className="right" onClick={this.download}><i className="fa fa-download"></i> Down</a>
            </div>
        );
    }
});

var CardReveal = React.createClass({

    getInitialState: function () {
        return {
            data: {
                item: this.props.data.item,
                link: this.props.data.link
            }
        };
    },

    closeView: function ( e ) {
        ga( 'send', {
            hitType: 'event',
            eventCategory: 'Close',
            eventAction: 'click',
            eventLabel: 'Closing Image' + this.props.data.item
        });
    },

    render: function () {
        return (
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.data.title}<i className="material-icons right" onClick={this.closeView}>close</i></span>
                <p>{this.props.data.description}</p>
                <CardActions action={this.state.data}/>
            </div>
        );
    }
});

// Home component
var Card = React.createClass({

    getInitialState: function () {
        return {
            data: {
                item: this.props.data.id,
                title: this.props.data.title,
                description: this.props.data.description,
                link: this.props.data.img
            }
        };
    },

    render: function () {
        return (
            <div className="col x12 m6 l3">
                <div className="card small">
                    <CardImage image={this.props.data.img}/>
                    <CardContent title={this.props.data.title} link={this.props.data.link}/>
                    <CardReveal data={this.state.data}/>
                </div>
            </div>
        );
    }
});

// Export component
window.Card = Card;