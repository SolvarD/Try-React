import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    displayValue = () => {
        if (this.props.cells[this.props.index]) {
            return this.props.index % 2 == 0 ? 'X' : 'O';
        }
    }

    selectCase = () => {
        if (!this.props.cells[this.props.index]) {
            this.props.cells[this.props.index] = this.props.index % 2 == 0 ? 'X' : 'O';
            this.setState({ boardValues: this.props.cells });
        }
    }

    render() {
        return (
            <button className="square" onClick={() => this.selectCase()}>
                {this.displayValue()}
            </button>
        );
    }
}

class Board extends React.Component {
    boardValues = Array(9).fill(null);

    constructor(props) {
        super(props);
        this.state = { boardValues: this.boardValues };
    }

    renderSquare(i) {        
        return <Square cells={this.state.boardValues} index={ i } />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
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

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
