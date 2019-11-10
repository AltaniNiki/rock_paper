import React from 'react';
import './App.css';
import Menu from './Components/menu/menu';
import Game from './Components/game/game';

import { connect } from 'react-redux';

class App extends React.Component {

  render(){

    console.log('this.props',this.props);
    return (
      <div className="App">
        {this.props.pageView === 'menu' && 
        <Menu
        />}
        {this.props.pageView === 'game' && 
          <Game
          />
        }
      </div>
    );
  }
  
}


function mapStateToProps(state){
  console.log('state',state);
  return{
    pageView :state.page
  };
}

export default connect(mapStateToProps,null)(App);
