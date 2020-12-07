import React from 'react';
import { Square } from './square'
import { Subject } from 'rxjs';

export class Board extends React.Component {
    boardValues = Array(9).fill(null);
    fluxBoardValues = new Subject();

    constructor(props) {
        super(props);
        this.state = { boardValues: this.boardValues };

        this.fluxBoardValues.subscribe((data) => {
            this.setState({ boardValues: data });
        });       
    }

    renderSquare(i) {
        return <Square cells={this.state.boardValues} listener={this.fluxBoardValues } index={i} />;
    }

    //from tutorial
    computeResult = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.state.boardValues[a] && this.state.boardValues[a] === this.state.boardValues[b] && this.state.boardValues[a] === this.state.boardValues[c]) {
                return this.state.boardValues[a];
            }
        }

        return null;
    }

    render() {
        const status = `Next player: ${this.state.boardValues.filter((g) => { return g != null }).length % 2 === 0 ? 'X' : 'O'}`;
        let result = this.computeResult() ? `End game ${this.computeResult()} won` : 'in progress';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="status">{result}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}