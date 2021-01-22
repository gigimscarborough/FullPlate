import React from 'react'
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {

        super(props)
        this.state = this.props.user ;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demo = this.demo.bind(this)
    
    }

    componentDidMount(){
        if (Boolean(this.props.errors.length)) {
            this.props.removeErrors()
        }
    }
    componentWillUnmount() {
        if (Boolean(this.props.errors.length)) {
            this.props.removeErrors()
        }
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
            
    handleErrors(type){
                
        return this.props.errors.filter(error => error.includes(type))
    }

    toggleClass(type){
        return !this.handleErrors(type).length ? "" : "error-input"

    }

    demo(e){
        e.stopPropagation()
        this.props.action({email: "demo@demo.com", password: "demo1234" })
        .then(() => this.props.closeModal());
    }
            
            
            
            render() {
                const errorList = this.props.errors.map((error, i) => (<li key={i}>{error}</li>))
                    
                    const loginRender = () =>  (
                        <div className="login-form-container">
                            {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <h1 className="form-header">Please sign in</h1>
                                <br/>
                                <ul className="error-list">
                                    {errorList}
                                </ul>
                                    <div className="login-form">
                                        <input type="text" className="form-input" type="text" placeholder="Email" onChange={this.handleInput('email')} />
                                        <br/>
                                        <input type="text" className="form-input" type="password" placeholder="Password" onChange={this.handleInput('password')} />
                                        <br/>
                                        <button type="text" className="form-btn">Sign In</button>
                                        <span onClick={this.demo} type="text"className="form-btn demo-btn">Demo User</span>
                                    </div>
                                <p className="contact-p">Don't want to complete the form?</p>
                                    <div className="contact-div">
                                    <a href="https://github.com/gigimscarborough"><div>Continue to my <i className="fab fa-github"></i> GitHub</div></a>
                                    <a href="https://linkedin.com/in/gigimscarborough"><div>Continue to my <i className="fab fa-linkedin"></i> LinkedIn</div></a>
                                    <a href="https://angel.co/u/gigi-scarborough"><div>Continue to my <i className="fab fa-angellist"></i> AngelList</div></a>
                                    </div>
                                <p>New to FullPlate? {this.props.otherForm}</p>
                            </form>
                        </div>
                        
                    )

        const signupRender = () =>  (
             <div className="login-form-container">
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                 <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="form-header">Welcome to FullPlate!</h1>
                    <br/>
                    <div className="login-form">
                        <input type="text" className={`form-input ${this.toggleClass('First')}`} type="text" value={this.state.first_name} placeholder="First Name *" onChange={this.handleInput('first_name')} />
                        <ul className="error-list">
                            <li>{this.handleErrors('First')}</li>
                        </ul>
                    <br />
                        <input type="text" className={`form-input ${this.toggleClass('Last')}`} type="text" value={this.state.last_name} placeholder="Last Name *" onChange={this.handleInput('last_name')} />
                        <ul className="error-list">
                            <li>{this.handleErrors('Last')}</li>
                        </ul>
                    <br />
                        <input type="text" className={`form-input ${this.toggleClass('Email')}` } type="text" value={this.state.email} placeholder="Enter email *" onChange={this.handleInput('email')} />
                        <ul className="error-list">
                            <li>{this.handleErrors('Email')}</li>
                        </ul>
                    <br />
                        <input type="password" className={`form-input ${this.toggleClass('Password')}`} value={this.state.password} placeholder="Enter password *"onChange={this.handleInput('password')} />
                        <ul className="error-list">
                            <li>{this.handleErrors('Password')}</li>
                        </ul>
                    <br />
                    <button className="form-btn">Create Account</button>
                    </div>
                <p>Already have an account? {this.props.otherForm}</p>
                 </form>
             </div>
        )
        
        return this.props.formType === 'login' ? loginRender() : signupRender()
    }


}

export default withRouter(SessionForm)