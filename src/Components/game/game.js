import React from 'react';
import './game.css';

import paper_choice from '../../img/paper_choice.png';
import pencil_choice from '../../img/pencil_choice.png';
import psalidi_choice from '../../img/psalidi_choice.png';
import rock_choice from '../../img/rock_choice.png';
import paper from '../../img/paper_250.png';
import rock from '../../img/rock_250.png';
import scissors from '../../img/scissors_250.png';

import { connect } from 'react-redux';
import { playerChoice ,pcChoice} from '../../actions/actions.js';


class Game extends React.Component{



    render(){
      
       

        return(
            <div className="game">
                <div className="infoGame">
                    <div className="score">
                        score: CPU {this.props.scroreUser} - YOU {this.props.scoreCpu}
                     </div>

                    <div className="title">
                            Rock Paper Scissor
                    </div>

                    <div className="round">
                        round : {this.props.round}
                    </div>
                </div>

                <div className="result">
                    <div class="resultInfo">
                        <div id="cpuChoice">
                            <img id="imgCpuChoice" src={(this.props.cpu === 'paper')?( paper):( (this.props.cpu === 'rock') ? rock: ( (this.props.cpu==='scissors'))?scissors:'' )}  />

                        </div>
                        
                        <div id="userChoice">
                            <img src={( this.props.player === 'paper' ) ? ( paper):( (this.props.player === 'rock') ? rock: ( (this.props.player === 'scissors'))?scissors:'' )}/>
                        </div>
                    </div>
                </div>

                <div className="choiceDiv">
                
                    <div className="choices">
                    
                        <div className={"btnChoice" + (this.props.player === 'paper' ? " activeChoice":"")} id="paper" onClick={()=>this.props.playerChoice('paper')}><img src={paper_choice} alt="paper"/> </div>
                        <div className={"btnChoice" + (this.props.player === 'rock' ? " activeChoice":"")} id="rock" onClick={()=>this.props.playerChoice('rock')}><img src={rock_choice} alt="rock"/> </div>
                        <div className={"btnChoice" + (this.props.player === 'scissor' ? " activeChoice":"")} id="scissor" onClick={()=>this.props.playerChoice('scissors')}><img src={psalidi_choice} alt="psalidi"/> </div>
                        <div className={"btnChoice" + (this.props.player === 'pencil' ? " activeChoice":"")} id="pencil" onClick={()=>this.props.playerChoice('pencil')}><img src={pencil_choice} alt="pencil"/> </div>
                    </div>
                
                </div>
                    
                <div className="actions">
                    <button onClick={this.props.pcChoice}>Go</button>
                </div>
                    
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        player :state.userChoice,
        cpu: state.cumputerChoice,
        scroreUser:state.scroreUser,
        scoreCpu:state.scoreCpu,
        round: state.round
      };
}

export default connect(mapStateToProps,{playerChoice,pcChoice})(Game);