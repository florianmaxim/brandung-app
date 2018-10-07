import React from 'react';

import ContainerArticles from './container/component-articles';
import ContainerEvents from './container/component-events';

import ComponentNavigation from './components/component-navigation';

import {Route, Switch} from 'react-router';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ActionsNavigation from './actions/actions-navigation'; 

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
class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

        <div style={{
          width: '100%',
          maxWidth: 1000
        }}>
        
        <ComponentNavigation/>

        <Switch>
          
          <Route exact path="/" component={this.props.navigation.mode=='events'?ContainerEvents:ContainerArticles}/>

          <Route path="/*" component={this.props.navigation.mode=='events'?ContainerEvents:ContainerArticles}/>

        </Switch>

       </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);