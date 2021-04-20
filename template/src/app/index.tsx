import * as React  from 'react'
// import {hot} from  'react-hot-loader'
import loadable from  '@uts/loadable'
import {HashRouter,Router,Switch,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Loading from '@cpt/loading'
import { store } from 'store/index';
/** 
// *
*/
//lazyLoad.js
 function lazyLoad(componentfn:any):any{
    class LazyloadComponent extends React.Component<any,any> {
        constructor(props:any) {
            super(props);
            this.state= {
                component:false
            }
        }
        async componentWillMount() {
            const {default: component} = await componentfn();
            this.setState({component})
        }
        render() {
            const C =this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
    return LazyloadComponent;
}

// const Main=loadable(()=>import('@vw/main'))
// const Home=loadable(()=>import('@vw/home'))
console.log(Route.prototype,'Route.prototype')
const Main=lazyLoad(()=>import('@vw/main'))
const Home=lazyLoad(()=>import('@vw/home'))
export default function App(props:any){
    return <Provider store= {store}>
          <HashRouter>
          <Switch> 
          <Route exact path='/' component={Main} />
          <Route exact path='/home' component={Home} />
          </Switch>
          </HashRouter>
           <Loading/>
         </Provider>
}
// {
//   routers.map((item:RouteType)=>{
//    return <Route  exact {...item}></Route>
//  })
//     }