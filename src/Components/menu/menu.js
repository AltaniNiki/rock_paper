import React from 'react';
import logo from '../../img/icon_paper.png';
import './menu.css';
import { connect } from 'react-redux';
import {pageViewAction} from '../../actions/actions.js';



class Menu extends React.Component{


    render(){
        return(
            <div className="Menu">
               <div className="title">
                    <h3>Rock Paper Scissor Game </h3>
                </div> 
                <div className="imagesIcon">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="actionBtn">
                    <button className="btn" onClick={()=>this.props.pageViewAction('game')}>Let's Start</button>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        pageView:state.page
    }
}

export default connect(mapStateToProps,{pageViewAction})(Menu);