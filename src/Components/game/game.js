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
import { playerChoice ,pcChoice,scorePlayer,scorePc,roundGame} from '../../actions/actions.js';


class Game extends React.Component{


    calculateResult=()=>{
        let options = ['pencil','paper','rock','scissors'];
        let result = options[Math.floor(Math.random() * options.length)];
        let thruthTable=[
            [0,0,1,1],
            [1,0,0,0],
            [0,1,0,1],
            [0,1,0,0]
        ];
        let new_score =0;
        console.log('pc ',result, ' userChoice', this.props.player);

        this.props.pcChoice(result);

        let pc = result === 'rock'? 0 : result === 'paper' ? 1 : result === 'scissors'? 2 : result === 'pencil' ? 3 : '';
        let  user = this.props.player === 'rock'? 0 : this.props.player === 'paper' ? 1 : this.props.player === 'scissors'? 2 : this.props.player === 'pencil' ? 3 : '';

        //  console.log('pc ' , pc ,' user ',user);
        
        let playerUs = thruthTable[user][pc];
        let playerPc = thruthTable[pc][user];


        if (playerPc > playerUs){
            console.log('kerdise to pc ');
            console.log('score pc',this.props.scoreCpu);
            new_score=this.props.scoreCpu +1;
            this.props.scorePc(new_score);

        }else if(playerUs > playerPc){
            console.log('kerdise o user');
            console.log('score pc',this.props.scroreUser);
             new_score = this.props.scoreUser +1;   
             this.props.scorePlayer(new_score);
        }else {
            console.log('isopalia');
        }
        
        
         this.props.roundGame(this.props.round +1);
         
    };


    render(){
      
       

        return(
            <div className="game">
                <div className="infoGame">
                    <div className="score">
                        score: CPU {this.props.scoreUser} - YOU {this.props.scoreCpu}
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
                    <button onClick={this.calculateResult}>Go</button>
                </div>
                    
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        player :state.userChoice,
        cpu: state.cumputerChoice,
        scoreUser:state.scoreUser,
        scoreCpu:state.scoreCpu,
        round: state.round
      };
}

export default connect(mapStateToProps,{playerChoice,pcChoice,scorePlayer,scorePc,roundGame})(Game);