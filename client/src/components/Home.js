import React from 'react'

const Home = () => {
    return (
        <div className="card" style={{margin:"10%", padding: "20px", textAlign: "center"}}>
            <h1>Home Page</h1>
            <div className="row">
                <a className="waves-effect waves-light btn-large pink">Signup with Google</a>
            </div>
            <div className="row">
                <a className="waves-effect waves-light btn-large pink">Signup with Facebook</a>
            </div>
        </div>
    )
}

export default Home
