import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

//#region The Basics 
//** The basics **//
//Virtual DOM nodes and JSX

//Props and state
  //-- (props) => {}
  //-- [value, setValue] => useState(initialValue);
  //-- Immutable props Mutable state

//ReactDOM.render
  //-- <Component />
  //-- DOM node

//React events (onCLick, submit)
//Functions and class components

//Tree Reconciliation in action
//tutorial url: https://jscomplete.com/playground/rgs1.7
// const render = () => {
//   document.getElementById('mountNode').innerHTML = `
// 	<div>
//     Hello HTML
//   <input />
//   <pre>${(new Date).toLocaleTimeString()}</pre>
//   </div>
// `;

//   ReactDOM.render(
//     React.createElement(
//       'div',
//       null,
//       'Hello React',
//       React.createElement('input', 'null'),
//       React.createElement('pre', 'null', (new Date).toLocaleTimeString()),
//     ),
//     document.getElementById('mountNode2'),
//   );

//   // 	currentTime: (new Date).toLocaleTimeString()
// }
// setInterval(render, 1000);

// 	currentTime: (new Date).toLocaleTimeString()
//  setInterval(fn, 1000);

//Component Reusability
//tutorial url: https://jscomplete.com/playground/rgs1.6
//tutorial url: https://jscomplete.com/playground/rgs1.5
// function Button(props) {
//   const handleClick = () => props.onClickFunction(props.increment);
//   return(
//     <button onClick={handleClick}>
//       add(+{props.increment})
//     </button>
//   );
// }

// function Display(props) {
//   return (
//     <div>{props.message}</div>
//   )
// }

// function App() {
//   const [counter, setCounter] = useState(0);
//   const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
//   return (
//     <div>
//       <Button onClickFunction={incrementCounter} increment={1} />
//       <Button onClickFunction={incrementCounter} increment={5} />
//       <Button onClickFunction={incrementCounter} increment={10} />
//       <Button onClickFunction={incrementCounter} increment={100} />
//       <Display message={counter}/>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('mountNode'),)

//tutorial url: https://jscomplete.com/playground/rgs1.4
//First One-Way Data FLow
// function Button(props) {
//   return(
//     <button onClick={props.onClickFunction}>
//       add(+1)
//     </button>
//   );
// }

// function Display(props) {
//   return (
//     <div>{props.message}</div>
//   )
// }

// function App() {
//   const [counter, setCounter] = useState(42);
//   const incrementCounter = () => setCounter(counter+1);
//   return (
//     <div>
//       <Button onClickFunction={incrementCounter} />
//       <Display message={counter}/>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('mountNode'),
// )

//tutorial url: https://jscomplete.com/playground/rgs1.1
//tutorial url: https://jscomplete.com/playground/rgs1.2
//tutorial url: https://jscomplete.com/playground/rgs1.3

// function Button() {
// 	const [counter, setCounter] = useState(0);
//   const handleClick = () => setCounter(counter+1);
// 	return (
//     <button onClick={handleClick}>
//       {counter}
//     </button>);
// }

// //Display
// function Display() {
//   return (
//     <div></div>
//   );
// }

// ReactDOM.render(
//   [<Button />, <Display />], 
//   document.getElementById('mountNode'),
// );
//Draft JSX specification:  https://facebook.github.io/jsx/

//React The basics
//Compoonent
//HOOK
/*
function logRandom() {
  console.log(Math.random())
}

function clearConsole() {
  console.clear();
}

function Button() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter + 3)}>{counter}</button>

  //[counter, setCounter] = useState(); //[counter value, setValue] = initvalue(x)
  const [counter, setCounter] = useState(0);
  return (
   <div>
      <button onClick={logRandom}>Log random</button>
      <button onClick={clearConsole}>Clear console</button>
    </div>
    )
  //return <button>{counter}</button>
  //return <button>{Math.floor(Math.random() * counter + 1)}</button>
  //return <button>TEST</button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode')
);

/*function Hello() {
	return <div>Hello from React!! This is a test from REACT console!</div>;
}*/
/*ReactDOM.render(
  <Hello />,
  document.getElementById('mountNode')
);*/
//#endregion