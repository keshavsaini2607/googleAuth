import React from 'react'
import {connect} from 'react-redux';

const Profile = (props) => {
    if(!props.user) {
        props.history.push('/');
    }

    return (
        <div style={{display:"grid", placeItems: "center"}}>
            <h1 style={{textTransform: "capitalize"}}>Profile User {props?.user?.userName}</h1>
            <img src={props?.user?.picture} width={200} height={200} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(Profile)
