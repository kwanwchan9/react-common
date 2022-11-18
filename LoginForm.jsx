import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = () => {
  const [data, setData] = useState({})

  const handleChange = (event) => {
    const inputs = { [event.target.name]: event.target.value }
    setData({ ...data, ...inputs })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='username'>Username</label>
          <input
            name='username'
            className='form-control'
            placeholder='Email'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            className='form-control'
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </React.Fragment>
  )
}

export default Form
