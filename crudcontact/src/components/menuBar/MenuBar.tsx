import React from 'react';
import './MenuBar.scss'
import { useHistory } from 'react-router';


interface MenuBarProps {
    isToggleMenu: boolean;
    toggleMenu: () => void;
}
const Menubar = (Props: MenuBarProps) => {
    const { isToggleMenu, toggleMenu } = Props;
    const history = useHistory();

    return (
        <div className="menu-bar" >
            <div className="menu-header">
                <div className="logo">
                    <img src="https://1.bp.blogspot.com/-KfCsyDWCa90/YHl1dr74s6I/AAAAAAAAEvE/Tc9vt0TdZjcm9161h0wGqt6Ns9QSH4kegCLcBGAsYHQ/s1600/Logo%2BDogecoin.png" style={{width: '120px'}}/>
                </div>
                {/* <div className="toggle" onClick={toggleMenu}>
                    X
                </div> */}
            </div>
            <div className="menu-item" onClick={() => (history.push('/'))}>
                All Contact List
            </div>
            <div className="menu-item" onClick={() => (history.push('/add'))}>
                Add Contact
            </div>
            <div className="menu-item">
                About
            </div>
        </div>
    )
}

export default Menubar