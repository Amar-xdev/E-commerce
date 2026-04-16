
import React, { useState, useRef } from 'react'
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

  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & special char";
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
      if (validationErrors.name && nameInputRef.current) {
        nameInputRef.current.focus()
      } else if (validationErrors.email && emailInputRef.current) {
        emailInputRef.current.focus()
      } else if (validationErrors.password && passwordInputRef.current) {
        passwordInputRef.current.focus()
      }
    } else {
      setErrors({})

      if (isLogin) {
        alert("Login Successful ")
      } else {
        alert("Signup Successful ")
        
        setIsLogin(true);
        setErrors({});
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
                ref={nameInputRef}
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
            ref={emailInputRef}
            type='email'
            name="email"
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            ref={passwordInputRef}
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
           
            <span onClick={() => {
              setIsLogin(!isLogin);
              setErrors({});
              setFormData({
                name: "",
                email: "",
                password: "",
                agree: false
              });
            }}>
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