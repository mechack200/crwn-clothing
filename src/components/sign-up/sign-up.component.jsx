import React from 'react'

import './sign-up.styles.scss'

import FormInput from '../FormInput/Forminput.component'
import CustomButton from '../custom-button/CustomButton.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    displayName: '',
    confirmPassword: '',
  }

  handleSubmit  = async event => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      createUserProfileDocument(user, { displayName })
      this.setState({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account yet</h2>
        <span>Sign up with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <div className="button">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    )
  }

}

export default SignUp
