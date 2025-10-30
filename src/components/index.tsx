import { render } from '@solid-js/web';
import { HashRouter, Route } from '@solid-js/router'
import { Button, buttonTypes } from './button/index.ts';
import './index.css'


render(
  () => <HashRouter>
    <Route path='/button' component={() => <Button>Hello</Button>}/>
  </HashRouter>,
  globalThis.document.body
);
