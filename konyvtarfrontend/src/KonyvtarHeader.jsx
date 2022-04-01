import React, { Component } from 'react';
class KonyvtarHeader extends Component {
    render() {
        const { form_id } = this.props;
        return (
            <header>
                <nav className="navbar navbar-expand">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href={"#"+form_id}>Új könyv felvétele</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://petrik.hu/">Petrik honlap</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <h1>Petrik Könyvtár Nyilvántartó</h1>
            </header>
        );
    }
}

export default KonyvtarHeader;