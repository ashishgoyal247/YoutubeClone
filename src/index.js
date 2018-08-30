import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component that produce some component.

const App = function() {
  return <div>Hi</div>;
}

//Take this component geneated HTML and put it on the page(in the DOM)
ReactDOM.render(App);