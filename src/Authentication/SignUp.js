
import React, { useRef, useState } from 'react'
import validator from '../Validations/validation'
export default function SignUp() {
    const email = useRef('')
    const name = useRef('')
    const password = useRef('')
    const onChangeEmail = (e) => {
        email.current = e.target.value

        setERROR({ ...ERROR, email: !validator.emailValidation(email.current) })
    }
    const onChangeName = (e) => {
        name.current = e.target.value
        setERROR({
            ...ERROR,
            name: !validator.nameValidator(name.current)
        })
    }

    const onChangePassword = (e) => {
        password.current = e.target.value
        setERROR({
            ...ERROR,
            password: !validator.passwordValidation(password.current)
        })
    }
    const [ERROR, setERROR] = useState({
        name: false,
        email: false,
        password: false,
        signUp: false
    })
    const [ERROR_MESSAGE] = useState({
        email: "Invalid Email Address",
        name: "Invalid Name",
        password: "Weak Password",
        signUp: "unable to signup, please try again"
    })
    return (
        <div className='bg-light text-center h-100' style={{ width: "50%", margin: "auto", marginTop: "5%", padding: "10px", maxWidth: "350px" }}>
            <div className='mb-3'>
                <h2 className='text-success'>Film Fair</h2>
                {ERROR.signUp ? <span className='text-danger'>{ERROR_MESSAGE.signUp}</span> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" onChange={onChangeName} className="text-center form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                {ERROR.name ? <span className='text-danger'>{ERROR_MESSAGE.name}</span> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" onChange={onChangeEmail} className="text-center form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                {ERROR.email ? <span className='text-danger'>{ERROR_MESSAGE.email}</span> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                <input type="password" onChange={onChangePassword} className="text-center form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                {ERROR.password ? <span className='text-warning'>{ERROR_MESSAGE.password}</span> : ""}
            </div>
            <div className='mb-3'>
                <button type="submit" className="btn btn-success">Welcome</button>

            </div>
        </div>
    )
}
