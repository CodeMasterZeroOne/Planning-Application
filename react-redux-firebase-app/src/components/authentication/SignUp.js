import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleCahnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleCahnge} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleCahnge} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleCahnge} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleCahnge} />
                    </div>

                    <div className="input-field">
                        <button className="btn green lighten-1 z-dept-0">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
