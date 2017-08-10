import React from 'react';
import { render } from 'react-dom';

import Panoviewer from './components/Panoviewer';

const App = () => (
    <div style={appStyle}>
        <Panoviewer />
    </div>
);

const appStyle = {
};

render(
    <App />,
    document.getElementById('app')
);