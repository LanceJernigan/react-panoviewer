import React from 'react';
import { PerspectiveCamera, Scene, WebGLRenderer, Mesh, MeshBasicMaterial, BoxGeometry } from 'three';

class Panoviewer extends React.Component {
    constructor(props) {
        super();

        this.state = {
            renderer: null,
            camera: null,
            scene: null,
        };
    }

    componentDidMount() {
        const {
            canvas
        } = this;

        const scene = new Scene();
        const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        var geometry = new BoxGeometry( 1, 1, 1 );
        var material = new MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        const renderer = new WebGLRenderer({
            canvas: canvas,
        });

        renderer.render(scene, camera);

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
        return (
            <canvas
                ref={this._canvasRef}
            />
        );
    }
}

export default Panoviewer;