import { type JSXElement, createSignal } from '@solid-js'

import './index.css'


export function ToggleSwitch() : JSXElement {

  const [state, setState] = createSignal(false);

  const toggle = () => {
    setState((v) => !v);
    console.log('State is now:', state());
  }

  return (
    <button
      type='button'
      class={`ui toggle-switch`}
      classList={{
        'toggle-switch--active': state()
      }}
      data-checked={state()}
      onClick={toggle}
    >
      {state() ? 'ON' : 'OFF'}
    </button>
  )
}
