import type {JSXElement} from '@solid-js'
import './index.css'


export function NotFound() : JSXElement {
  return (
    <div class='page not-found'>
      <h1 class='title'>404 Not Found</h1>
      <img class='logo' src='/static/solidjs_logo.svg' alt='SolidJS Logo'/>
      <a class='link' href='/'>Go to Home</a>
    </div>
  )
}
