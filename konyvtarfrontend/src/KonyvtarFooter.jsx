import React, { Component } from 'react';
class KonyvtarFooter extends Component {
    render() { 
        const { keszito } = this.props;
        return (
            <footer>
                Készítette: {keszito}
            </footer>
        );
    }
}
 
export default KonyvtarFooter;