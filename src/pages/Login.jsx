import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className='d-flex justify-content-center'>
      <div className="form-image d-none d-md-block">
        <img src="https://picsum.photos/800/800" alt="sample-picture" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={ handleLogin }>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>E-mail</label>
            <input type="email" className="form-control" id='email' placeholder='Enter your e-mail address' required onChange={(e) => setEmail(e.target.value)}/>
            </div>
          <div className="mb-3">
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" className="form-control" id='password' placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="link">Forgot Password?</div>
          <input type="submit" className="btn btn-primary form-control" value='Login'/>

        </form>
        <button className="btn btn-primary form-control">Continue with Goggle</button>
      </div>
    </div>
  )
}

export default Login