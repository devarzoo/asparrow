import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoo/asparrowtech-logo.png'


const Logo = ({limage, dimage, simage}) => {
    console.log("lllll",limage);
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <img className="light-version-logo" src={logo} alt="logo" height='100px' width='200px' style={{backgroundColor:"none"}} />
            <img className="dark-version-logo" src={logo} alt="logo" height='100px' width='200px' />
            <img className="sticky-logo" src={logo} alt="logo" height='100px' width='200px' />
        </Link>
    )
}


export default Logo;