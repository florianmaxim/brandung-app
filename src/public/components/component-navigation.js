import React, {StyleSheet} from 'react';

import CONFIG from '../../../config.json'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ActionsNavigation from '../actions/actions-navigation'; 

import '../styles/index.scss';

function mapStateToProps(state) {
    return {
        navigation: state.navigation
    }
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setMode: ActionsNavigation.setMode
    }, dispatch);
}

class ComponentNavigation extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
      //console.log(this.props.match.params)
  }

  render(){

    return(

      <div className='navigation-container'>

       {
        CONFIG.categories.map((tab, index)=>{

          return(
       
            <div 
              key={index}
              onClick={()=>this.props.setMode(tab.value)}
              className='button'
              style={{
                  padding: this.props.navigation.mode==tab.value?10:7.5,
                  paddingLeft: this.props.navigation.mode==tab.value?20:10,
                  paddingRight: this.props.navigation.mode==tab.value?20:10,
                  background: this.props.navigation.mode==tab.value?'white':'rgba(140,191,232,1)',    
              }}
            >
            <span>{tab.caption}</span>
            </div>

          )
        })

        }     

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentNavigation);