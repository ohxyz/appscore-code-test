import React from 'react';
import { Grid } from '@ohxyz/grid';

class List extends Grid {

    renderCell( content, title ) {

        return  <React.Fragment>
                    <span className={ this.makeClassNameByPrefix( 'cell-title' ) } >
                        { title }
                    </span>
                    <span className={ this.makeClassNameByPrefix( 'cell-content' ) } >
                        { content }
                    </span>
                </React.Fragment>
    }

    render() {

        return  <div className={ this.props.classNamePrefix } >
                    { this.renderBody() }
                </div>
    }
}

export {

    List
}