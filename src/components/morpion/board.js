import React from 'react';
import { Square } from './square'

export class Board extends React.Component {
    boardValues = Array(9).fill(null);

    constructor(props) {
        super(props);
        this.state = { boardValues: this.boardValues };
    }

    renderSquare(i) {
        return <Square cells={this.state.boardValues} index={i} />;
    }

    render() {
        const status = 'Next player: X';
        let result = this.state.boardValues.filter((g) => { return g != null }).length == 9;
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