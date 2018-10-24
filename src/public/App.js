import React from 'react';

import ContainerNews from './container/component-news';
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

       <div className={`app`}>
        
        <ComponentNavigation/>

        <Switch>
          
          <Route exact path="/" component={this.props.navigation.mode=='events'?ContainerEvents:ContainerNews}/>

          <Route path="/*" component={this.props.navigation.mode=='events'?ContainerEvents:ContainerNews}/>

        </Switch>

      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);