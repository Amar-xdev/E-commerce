
import React, { useState } from 'react'
import "./Css/LoginSignup.css"

const LoginSignup = () => {

  const [isLogin, setIsLogin] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const validate = () => {
    let newErrors = {}

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email required"
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!isLogin && !formData.agree) {
      newErrors.agree = "You must accept terms"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})

      if (isLogin) {
        alert("Login Successful ")
      } else {
        alert("Signup Successful ")
      }

      console.log(formData)

      setFormData({
        name: "",
        email: "",
        password: "",
        agree: false
      })
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">

       
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit} className='loginsignup-fields'>

         
          {!isLogin && (
            <>
              <input 
                type='text'
                name="name"
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </>
          )}

          <input 
            type='email' 
            name="email"
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type='password' 
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">
            {isLogin ? "Login" : "Continue"}
          </button>

          <p className="loginsignup-login">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Login here"}
            </span>
          </p>

          {!isLogin && (
            <>
              <div className='loginsignup-agree'>
                <input 
                  type='checkbox'
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
              </div>
              {errors.agree && <p className="error">{errors.agree}</p>}
            </>
          )}

        </form>

      </div>
    </div>
  )
}

export default LoginSignup;