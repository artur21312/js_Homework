import React, {Component} from 'react';
import './Center.css';

export class Center extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emojis: ["😀", "😂", "😍", "😎", "😢"],
            votes: [0, 0, 0, 0, 0],
            winner: null,
        };
    }


    handleVote = (index) => {
        const newVotes = [...this.state.votes];
        newVotes[index] += 1;
        this.setState({ votes: newVotes });
    };


    showResults = () => {
        const maxVotes = Math.max(...this.state.votes);
        const winnerIndex = this.state.votes.indexOf(maxVotes);
        this.setState({ winner: this.state.emojis[winnerIndex] });
    };

    render() {
        return (
            <div className="center">
                <h1>Голосование за смайлики</h1>
                <div className="emoji-list">
                    {this.state.emojis.map((emoji, index) => (
                        <div key={index} className="emoji-item">
              <span
                  className="emoji"
                  onClick={() => this.handleVote(index)}
              >
                {emoji}
              </span>
                            <span className="votes">Голосов: {this.state.votes[index]}</span>
                        </div>
                    ))}
                </div>
                <button className="show-results" onClick={this.showResults}>
                    Show Results
                </button>
                {this.state.winner && (
                    <div className="winner">
                        <h2>Победитель:</h2>
                        <span className="emoji">{this.state.winner}</span>
                    </div>
                )}
            </div>
        );
    }
}
