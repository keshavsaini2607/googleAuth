import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {


    // const renderContent = () => {
    //     switch(props.user) {
    //         case null:
    //             return <li><a href="/">Loading....</a></li>
    //         case false:
    //             return <li><a href="/auth/google">Signup</a></li> 
    //         default:
    //             return (
    //                 <React.Fragment>
    //                     <li><a href="/api/logout">Logout</a></li>
    //                     <li><Link to="/profile">Profile</Link></li>
    //                 </React.Fragment>
    //             )
    //     }
    // }

    console.log("Header", props.user);

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={props.user ? '/profile' : '/'} className="brand-logo">My Google Auth</Link>
                <ul id="nav-mobile" className="right">
                    {props.user === false ? (
                        <li><a href="/auth/google">Signup</a></li> 
                    ): (
                        <React.Fragment>
                            <li><a href="/api/logout">Logout</a></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </React.Fragment>
                    )}
                    
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}


export default connect(mapStateToProps)(Header)
