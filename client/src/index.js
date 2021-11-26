import React from 'react';
import ReactDOM from 'react-dom';

import Wizard from './container/wizard/wizard';


const App = () => {
    return (
        <div>
            <Wizard />
        </div>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

module.hot.accept();