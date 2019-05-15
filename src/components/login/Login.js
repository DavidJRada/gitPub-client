import React from 'react'
import '../login/login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.toggleLogIn(this.state.username)
        // console.log(isLoggedIn)
    }
    

    render() {
        return (
            <div className="login row">
                <form className='col s12'>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input placeholder='Username' id='username' type='text' className='validate' value={this.state.email} onChange={this.handleChange} />
                            <label htmlFor='username'>Username</label>
                        </div>
                        <div className='input-field col s6'>
                            <input placeholder='password' id='password' type='password' className='validate' onChange={this.handleChange} />
                            <label htmlFor='password'>Password</label>
                        </div>
                        <button onClick={this.handleSubmit}>LogIn</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default Login