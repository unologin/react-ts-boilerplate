import React from 'react';

import {render} from 'react-dom';

import './style.scss';

/**  @return App entry point */
function App() : JSX.Element
{
  return <div>
    Hello World
  </div>;
}

render(<App/>, document.getElementById('root'));
