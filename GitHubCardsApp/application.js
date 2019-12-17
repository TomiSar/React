// import React from 'react';
// import ReactDOM from 'react-dom';
//Github API data from https://api.github.com/users/    
// React class components url: https://jscomplete.com/playground/rgs2.1
//Styling with React componenets url https://jscomplete.com/playground/rgs2.2
//Working with data url https://jscomplete.com/playground/rgs2.3
//Initializing and reading the state object url https://jscomplete.com/playground/rgs2.4
//Taking input from user url https://jscomplete.com/playground/rgs2.5
//Working with Ajax Calls url https://jscomplete.com/playground/rgs2.6

class Card extends React.Component {
    render() {
        return (
          <div className="github-profile" style={{ margin: '1rem' }} >
            <img src="https://placehold.it./75" />
            <div className="info" style={{display: 'inline-block', marginleft: 10}}>
                <div className="name" style={{fontsize: '125%'}}>Name here</div>
                <div className="company">Company here</div>
            </div>
          </div>
        )
    }
}

// Card // List
class App extends React.Component {
    //constuctor
    //this
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}

/*const App = ({title}) => (
  <div className="header">{title}</div>
);*/

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode,
);