import React from 'react';
import { WebGLRenderer } from 'three';

class Panoviewer extends React.Component {
    constructor(props) {
        super();

        this.state = {
            canvas: null,
            renderer: null,
        };
    }

    componentDidMount() {
        const {
            canvas
        } = this;

        const renderer = new WebGLRenderer({
            canvas: canvas,
        });

        this.setState({
            renderer: renderer,
        })
    }

    _canvasRef = el => {
        const {
            canvas
        } = this;
        if (canvas !== el)
            this.canvas = el;
    };

    render() {
        const {
            canvas,
            renderer,
        } = this.state;
        const {
            src = 'http://o00o.me/photos/kyiv.jpg',
        } = this.props;

        return (
            <canvas
                ref={this._canvasRef}
            />
        );
    }
}

export default Panoviewer;