import React from 'react';

import {render} from 'react-dom';

import './style.scss';

/**  @return App entry point */
function App() : JSX.Element
{
  return <input type="text" onChange={() => { alert('OAJWD'); }} />;
}

render(<App/>, document.getElementById('root'));
