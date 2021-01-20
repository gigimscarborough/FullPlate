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
        this.props.action(user).then(() => this.props.history.push("/"));
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
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <h1>Please sign in</h1>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                    <br/>
                    <div className="login-form">
                    <label> Email
                    <input type="text" onChange={this.handleInput('email')} />
                    </label>
                    <br/>
                    <label> Password
                    <input type="password" onChange={this.handleInput('password')} />
                    </label>
                    <br/>
                    <button className="form-btn">Submit</button>
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
                 <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1>Welcome to FullPlate!</h1>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <br/>
                    <div className="login-form">
                    <label> Email
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <br />
                    <label> Password
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <br />
                    <label> First Name
                    <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
                    </label>
                    <br />
                    <label> Last Name
                    <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} />
                    </label>
                    <br />
                    </div>
                    <ul>
                        {errorList}
                    </ul>
                    <button className="form-btn">Submit</button>
                <p>Already Have An Account? {this.props.otherForm}</p>
                 </form>
             </div>
        )
        
        return this.props.formType === 'login' ? loginRender() : signupRender()
    }


}

export default withRouter(SessionForm)