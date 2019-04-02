import React, { Component } from 'react';



class Players extends Component{
    constructor(props){
        super(props);
        this.state= {
            countScore1: 0,
            countScore2: 0,
        }
    }

    buttonScoreClickMe= (e) =>{
        this.setState(
            {
                countScore1: this.state.countScore1+1,
            }
        )
    };

    buttonScoreClickMe2= (e) =>{
        this.setState(
            {
                countScore2: this.state.countScore2+1,
            }
        )
    };

    keyboardClick= (e)=>{
        console.log(e);
        if(e.code === "KeyQ") {
            this.setState(
                {
                    countScore1: this.state.countScore1 + 1,
                }
            )
        }
        if(e.code === "KeyP") {
            this.setState(
                {
                    countScore2: this.state.countScore2 + 1,
                }
            )
        }
    };
    //tried a to creat a muilplier function on the actual button.
    multiplier= (e) =>{
        if(document.addEventListener("keydown", this.multiplier))
        this.setState(
            {
                countScore1: this.state.countScore1+5,
            }
        )
    };

    render(){
        document.addEventListener("keydown", this.keyboardClick);

        return(
            <div>
            <h1>Player {this.props.whichPlayer}</h1>
        <h1>Score1: {this.state.countScore1}</h1>
        <h1>Score2: {this.state.countScore2}</h1>
        <button onClick={this.buttonScoreClickMe}>1pt</button>
        <button onClick={this.buttonScoreClickMe2}>1pt</button>
        <button onClick={this.multiplier}>+5</button>
        <button onClick={this.multiplier}>+10</button>
        <button onClick={this.multiplier}>+15</button>
        </div>
    );
    }
}

export default Players;