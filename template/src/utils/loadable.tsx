
import * as React from 'react'
import {Component} from 'react'
// import Loading from '@cpt/loading'
import Loadable from 'react-loadable'
interface RouteType{
  path:string,
  component:React.FC,
}
interface LoadingType{
  isLoading:boolean,
  error:any,
}
// const MyLoadingComponent = ({isLoading,error}:LoadingType) => {
//   // Handle the loading state
//   if (isLoading) {
//       return <div>Loading...</div>;
//   }
//   // Handle the error state
//   else if (error) {
//       return <div>Sorry, there was a problem loading the page.</div>;
//   }
//   else {
//       return null;
//   }
// };

// export const loadable=(loader:any)=>{
//   return Loadable({
//     loader:()=>loader,
//     loading:MyLoadingComponent,
// })
// }
export default function loadable(importComponent:Function) {
 class AsyncComponent extends Component<any,any>{
 constructor(props:any) {
  super(props);

  this.state = {
  component: null
  };
 }

 async componentDidMount() {
  if(this.hasLoadedComponent()){
   return;
  }
  const { default: component } = await importComponent();
  this.setState({
  component: component
  });
 }

 hasLoadedComponent() {
  return this.state.component !== null;
 }
 
 render() {
  const C = this.state.component;

  return C ? <C {...this.props} /> : null;
 }
 }

 return AsyncComponent;
}


