import { render } from '@solid-js/web';
import { HashRouter, Route } from '@solid-js/router'
import { button } from '../components/index.ts';
import './index.css'


render(
  () => <HashRouter>
    <Route path='/button' component={() => <button.Button>Hello</button.Button>}/>
  </HashRouter>,
  globalThis.document.body
);
