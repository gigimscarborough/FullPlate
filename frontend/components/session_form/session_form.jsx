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
        const errors = this.props.errors.errors.map((error) => (<li>error</li>))

        const loginRender = () =>  (
            <div>
                <h1>Please sign in</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Email
                    <input type="text" onChange={this.handleInput('email')} />
                    </label>
                    <br/>
                    <label> Password
                    <input type="password" onChange={this.handleInput('password')} />
                    </label>
                    <br/>
                    <button >Submit</button>
                <p>New To FullPlate? {this.props.otherForm}</p>
                </form>
                <ul>
                    {errors}
                </ul>
            </div>
        )

        const signupRender = () =>  (
            <div>
                <h1>Welcome to FullPlate!</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <br/>
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
                    <button>Submit</button>
                <p>Already Have An Account? {this.props.otherForm}</p>
                </form>
                <ul>
                    {errors}
                </ul>
            </div>
        )
        
        return this.props.formType === 'login' ? loginRender() : signupRender()
    }


}

export default withRouter(SessionForm)