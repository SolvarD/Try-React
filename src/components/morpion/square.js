import React from 'react';

export class Square extends React.Component {
    //constructor(props) {
    //    super(props);
    //}

    displayValue = () => {
        if (this.props.cells[this.props.index]) {
            return this.props.cells[this.props.index];
        }
    }

    selectCase = () => {
        if (!this.props.cells[this.props.index]) {
            this.props.cells[this.props.index] = this.props.cells.filter((g) => { return g != null }).length % 2 === 0 ? 'X' : 'O';
            //this.setState({ boardValues: this.props.cells });

            this.props.listener.next(this.props.cells);
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

export default Square;