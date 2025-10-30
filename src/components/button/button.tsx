import { mergeProps, type JSXElement } from '@solid-js'
import { buttonTypes, type ButtonType } from './button_types.ts';
import './index.css'


export function Button(props: {
  type?: ButtonType,
  children: JSXElement
}) : JSXElement {
  const properties = mergeProps({ type: buttonTypes.DEFAULT }, props);

  return (
    <button
      type='button'
      class={`ui button button--${properties.type}`}
      data-type={properties.type}
    >{properties.children}</button>
  )
}
