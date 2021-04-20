import * as React  from 'react'
import * as ReactDom  from 'react-dom'
import App from './app'
const render=()=>{
    ReactDom.render(
        <App/>,
        document.querySelector('#app') as HTMLElement
    )
}
render()


