import React from 'react';
import { Grid } from '@ohxyz/grid';

class List extends Grid {

    renderCell( content, title ) {

        return  <React.Fragment>
                    <span className={ this.makeClassNameByPrefix( 'row-cell-title' ) } >
                        { title }
                    </span>
                    <span className={ this.makeClassNameByPrefix( 'row-cell-content' ) } >
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