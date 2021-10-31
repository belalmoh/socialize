import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <h1>Hello world from socialize with Hot Reloading on saving</h1>
    )
}

ReactDOM.render(
    <HelloWorld />,
  document.getElementById('root')
);

module.hot.accept();