import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//tutorial url: https://jscomplete.com/playground/rgs1.1
//tutorial url: https://jscomplete.com/playground/rgs1.2
//tutorial url: https://jscomplete.com/playground/rgs1.3
//tutorial url: https://jscomplete.com/playground/rgs1.4
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
//tutorial url: https://jscomplete.com/playground/rgs1.5

//Draft JSX specification:  https://facebook.github.io/jsx/
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

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

