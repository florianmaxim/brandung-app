import React, {StyleSheet} from 'react';

import CONFIG from '../../../config.json'
import DATA from '../../../data.json';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ActionsNavigation from '../actions/actions-navigation'; 

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

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundImage: 'linear-gradient(rgba(5,125,214,1), rgba(5,115,191,1))',
        height: 50,
        paddingLeft:10
      }}>

       {
        CONFIG.categories.map((tab, index)=>{

          return(
       
            <button 
                key={index}
                onClick={()=>this.props.setMode(tab.value)}
                style={{
                    marginRight: 1,
                    padding: this.props.navigation.mode==tab.value?10:7.5,
                    paddingLeft: this.props.navigation.mode==tab.value?20:10,
                    paddingRight: this.props.navigation.mode==tab.value?20:10,
                    color: 'rgba(51,51,51,1)',
                    background: this.props.navigation.mode==tab.value?'white':'rgba(140,191,232,1)',
                    fontSize: 12,
                    fontWeight: 'bold',
                    boxShadow: '0 -1px 1px rgba(0,0,0,0.125)',
                    border:0,
                    outline:0
                }}>
            {tab.caption}
            </button>

          )
        })

        }     

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentNavigation);