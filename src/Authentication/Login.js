import React, { useRef, useState } from 'react'
import validator from '../Validations/validation'
export default function Login() {
    const email = useRef('')
    const password = useRef('')
    const onChangeEmail = (e) => {
        email.current = e.target.value

        setERROR(!validator.emailValidation(email.current))
    }
    const [ERROR, setERROR] = useState(false)
    const [ERROR_MESSAGE] = useState({
        email: "Invalid Email Address",
        login: "unable to login, please try again"
    })
    return (
        <div className='bg-light text-center h-100' style={{ width: "50%", margin: "auto", marginTop: "12%", padding: "10px", maxWidth: "350px" }}>
            <div className='mb-3'>
                <h2 className='text-success'>Film Fair</h2>
                {ERROR ? <span className='text-danger'>{ERROR_MESSAGE.login}</span> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" ref={email} onChange={onChangeEmail} className="text-center form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                {ERROR ? <span className='text-danger'>{ERROR_MESSAGE.email}</span> : ""}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <input type="password" ref={password} className="text-center form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
            </div>
            <div className='mb-3'>
                <button type="submit" className="btn btn-success">Confirm identity</button>

            </div>
        </div>
    )
}
