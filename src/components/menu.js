import React from 'react';
import {Link} from 'gatsby';

const  Menu = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '30px'
        }}>
            <Link to="/">Home</Link>
            <Link to="/about">O mnie</Link>
            <Link to="/services">Usługi</Link>
            <Link to="/blog">Blog</Link>
        </div>
    )
}

export default Menu;



