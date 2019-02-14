import React from 'react';
import ReactDOM from 'react-dom';
import { EarthquakeList } from './earthquake-list.js';
import './earthquake-list.less';

ReactDOM.render(

    <EarthquakeList />,
    document.getElementById( 'earthquake-list' )
);
