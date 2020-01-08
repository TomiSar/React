//React Fundamenetals -- Liam McLennan
//1.Overview

//2. Introducing React
//What is React?
//*Rendering and event handling
//*Maintained by Facebook
//*Novel Ideas
//--Influence from functional programming
//--One-way data flow
//--Virtual DOM
//--Vanilla JS for templating
//--Declaritive
//--Composable components

//Demo: Setting up React environment
//npm install -g create-react-app
//create-react-app click-counter
//cd click-counter
//npm start --> starts on localhost:3000

//Advantages and disadvantages
//--Advantages: Conceptual simplicity, Speed, Simple model for server-side rendering
//--Disadvantages: Limited in scope, Productivity, Complex tooling

//Architecture
//State --> Render --> DOM
//Props --> Render --> DOM

//React vs angular
//--React                           Angular--//
//Renders UI and handles events     A complete UI framework 
//Uses JavaScript for view logic    Custom "template expression" syntax
//JavaScipt                         TypeScipt

//3. Components
//Introduction
//What is s component?
//The author quiz
//Defining a comnponent
//Rendering a comnponent
//Bootstrapping the author quiz
//Props
//Class Components
//Comnponent lifecycle
/* Mounting */
//constructor --> componentWillMount --> render --> componentDidMount
/* Updating */
//componentWillReceiceProps --> shouldComponentUpdate --> componentWillUpdate --> render --> componentDidUpdate

//State
//--Alternative component data container
//--State is local, mutable data
//--More complex
//setState
//Prop Validation
//Testing Componenets

//Summary
//--React applications are built from components
//--Function or class syntax
//--Props and state
//--PropTypes and TypeScript

//4. JSX 
//Introduction
//What is JSX?
//Not using JSX
//Props in JSX
//Spread attributes 
//Events
//React data flow
//JSX and HTML
//Unescaping content 
//Child expression and elements

//5. Events
//Introduction
//Events
//DOM events
//preventDefault
//--Stop the browser doing what it would normally do
//Component events
//--Domain specific events
//--Higher abstraction
//--Call a function prop
//--Data out of a copmponent

//6. Forms

//7. State