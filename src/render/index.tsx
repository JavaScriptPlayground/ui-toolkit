import { render } from '@solid-js/web';
import { HashRouter, Route } from '@solid-js/router'
import { button, toggleSwitch } from '../components/index.ts';
import './index.css'


render(
  () => <HashRouter>
    <Route path='/button' component={() => <button.Button>Hello</button.Button>}/>
    <Route path='/toggle-switch' component={() => <toggleSwitch.ToggleSwitch />}/>
  </HashRouter>,
  globalThis.document.body
);
