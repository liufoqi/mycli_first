import { hot } from "react-hot-loader"
import * as React from 'react'
import { useEffect }from 'react'
import { connect } from 'react-redux'
import {updateLoding} from '@store/loading/action'

// import { bindActionCreators } from 'redux';
/**
* @hot
 */
import Green from '@svg/loading.svg'
import './index.scss'
const Loading =(props:any)=>{
  console.log('加载loading')
    useEffect(() => {
      setTimeout(()=>{
                props.onIncreaseClick(false)
                console.log('loading加载完毕')
      },1500)         
    }, []);
    return props.isLoading?<div className='loading'>
           <div className="desc">
               <Green  width={50} height={50} className='icon'/>
               <div>loading</div>
            </div>
            </div>:null
}
// Map Redux state to component props
function mapStateToProps(state:any) {
    return {
      isLoading: state.loadingReducer.isLoading
    }
  }
  
  // Map Redux actions to component props
  function mapDispatchToProps(dispatch:any) {
     
    return {
      onIncreaseClick: (data:Boolean) => dispatch(updateLoding({isLoading:data}))
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Loading)