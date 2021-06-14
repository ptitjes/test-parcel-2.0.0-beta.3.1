import '@rmwc/button/styles';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@rmwc/button';

start();

export function start(): void {
  ReactDOM.render(<App/>, document.getElementById('root'));
}

function App() {
  return (
    <Button>
      Test
    </Button>
  );
}
