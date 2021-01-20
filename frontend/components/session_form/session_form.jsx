import React from 'react'
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {

        super(props)
        this.state = this.props.user ;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(() => this.props.closeModal());
        // .then(() => this.props.history.push("/"))
    }

    handleInput(type) {

        return (e) => (
            this.setState(
                { [type]: e.currentTarget.value })
        )
    }



    render() {
        // debugger
        const errorList = this.props.errors.map((error, i) => (<li key={i}>{error}</li>))

        const loginRender = () =>  (
            <div className="login-form-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <h1 className="form-header">Please sign in</h1>
                    <br/>
                    <div className="login-form">
                        <input type="text" className="form-input" type="text" placeholder="E-mail Address*" onChange={this.handleInput('email')} />
                    <br/>
                        <input type="text" className="form-input" type="password" placeholder="Password*" onChange={this.handleInput('password')} />
                    <br/>
                        <button type="text" className="form-btn">Sign In</button>
                </div>
                <ul>
                    {errorList}
                </ul>
                <p>New To FullPlate? {this.props.otherForm}</p>
                </form>
             </div>
        )

        const signupRender = () =>  (
             <div className="login-form-container">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                 <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="form-header">Welcome to FullPlate!</h1>
                    <br/>
                    <div className="login-form">
                        <input type="text" className="form-input" type="text" value={this.state.email} placeholder="E-mail Address*" onChange={this.handleInput('email')} />
                    <br />
                        <input type="text" className="form-input" type="text" value={this.state.first_name} placeholder="First Name*" onChange={this.handleInput('first_name')} />
                    <br />
                        <input type="text" className="form-input" type="text" value={this.state.last_name} placeholder="Last Name*" onChange={this.handleInput('last_name')} />
                    <br />
                        <input type="password" className="form-input" type="text"value={this.state.password} placeholder="Password*"onChange={this.handleInput('password')} />
                    <br />
                    </div>
                    <ul>
                        {errorList}
                    </ul>
                    <button className="form-btn">Create Account</button>
                <p>Already Have An Account? {this.props.otherForm}</p>
                 </form>
             </div>
        )
        
        return this.props.formType === 'login' ? loginRender() : signupRender()
    }


}

export default withRouter(SessionForm)