import { FunctionComponent } from 'react'

import './Sidebar.css'

const Sidebar: FunctionComponent = () => {
    return (
        <div
            className="sidebar-background"
            style={{ width: '100%', height: '100%' }}
        >
            <>
                <div className="wrapper">
                    <div className="sidebar">
                        <ul>
                            <li>
                                <a href="#">Tabla</a>
                            </li>
                            <li>
                                <a href="#">Grafica</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Sidebar
