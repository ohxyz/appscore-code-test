import React from 'react';
import ReactDOM from 'react-dom';
import { EarthquakeList } from './earthquake-list.js';
import { EarthquakeMap } from './earthquake-map.js';
import './styles.less';

ReactDOM.render(
    <div id="app">
        <EarthquakeList />
    </div>,
    document.getElementById( 'container' )
);
