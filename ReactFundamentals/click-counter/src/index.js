import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

//Check React version
const REACT_VERSION = React.version;
ReactDOM.render(<div>React version: {REACT_VERSION}</div>, document.getElementById('root'))

//Testing components
//Prop validation
// function Sum(props) {
//     return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
// }
// Sum.propTypes = {
//     a : PropTypes.number.isRequired,
//     b: PropTypes.number.isRequired,
// };

// ReactDOM.render(<Sum a={"a"} b={3} />, document.getElementById('root'));
// serviceWorker.unregister();

//Class components
// class Sum extends React.Component {
//     render() {
//         return <h1>
//             {props.a} + {props.b} = {props.a + props.b}
//         </h1>;
//     }
// }

//Props
//  function Sum(props) {
//     return (
//         <div>
//             <h1> {props.a} + {props.b} = {props.a + props.b} </h1>
//         </div>
//     );
// }
/*props = {
    a: 5,
    b: 6
}*/

//ReactDOM.render(<Sum a={5} b={6} />, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root')) //State

//Defining a componenent
// function Hello(props) {
//     return (
//         <div>
//             <h1>Hello from React Component</h1>
//             <h2>Time: {props.timenow}</h2>
//         </div>
//     )
// }

// ReactDOM.render(<Hello timenow={new Date().toISOString()} />, document.getElementById('root'));

// let model = { clicks: 0 };
// function render() {
//     ReactDOM.render(<App
//         clicks={model.clicks}
//         onClick={() => { model.clicks += 1; render(); }} />, document.getElementById('root'));
// }
// render();
//serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA