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
        const renderer = new WebGLRenderer();

        this.setState({
            renderer: renderer,
        })
    }

    _canvasRef = el => {
        this.setState({
            canvas: el
        });
    };

    render() {
        const {
            canvas,
            renderer,
        } = this.state;
        const {
            src = 'http://o00o.me/photos/kyiv.jpg',
        } = this.props;

        console.log(canvas, renderer);

        return (
            <canvas
                ref={this._canvasRef}
            />
        );
    }
}

export default Panoviewer;