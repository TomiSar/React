import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));
serviceWorker.unregister();

//https://getbootstrap.com/ save https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css file
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA