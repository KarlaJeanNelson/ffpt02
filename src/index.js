import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles.css';

// const element = <div />

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-lg btn-block btn-primary mx-4 my-4">Button 1</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-lg btn-block btn-success mx-4 my-4">Button 2</button>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);