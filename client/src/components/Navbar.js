import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function NavBar({ loggedIn }) {
    const handleLogout = async () => {
        await axios.post('http://localhost:3000/api/log-out')
            .then(response => {
                if (response.status === 200) {
                    window.location.href = "/";
                } else {
                    console.log("Logout failed:", response.statusText);
                }
            })
            .catch((err) => {
                console.log("" + err);
            })
    };

    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                {loggedIn ? <button onClick={handleLogout}>Log Out</button>: null}
            </ul>
        </div>
    );
}

export default NavBar