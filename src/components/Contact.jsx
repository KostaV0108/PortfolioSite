import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you would typically send the form data to a server
      alert('Thank you for your message! I\'ll get back to you as soon as possible.')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setErrors({})
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-description">
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>
        
        <div className="contact-info-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-details">
              <a href="mailto:kostavelevwork@gmail.com" className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>kostavelevwork@gmail.com</span>
              </a>
              <a href="tel:6472838929" className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>(647) 283-8929</span>
              </a>
              <a href="https://github.com/KostaV0108" target="_blank" rel="noopener noreferrer" className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.865 20.335 8.839 21.489C9.339 21.579 9.521 21.272 9.521 21.001C9.521 20.751 9.513 19.988 9.508 19.191C6.726 19.792 6.14 17.95 6.14 17.95C5.685 16.762 5.029 16.48 5.029 16.48C4.121 15.81 5.097 15.825 5.097 15.825C6.101 15.909 6.629 16.873 6.629 16.873C7.521 18.288 8.97 17.831 9.539 17.577C9.631 16.934 9.889 16.488 10.175 16.243C7.954 15.988 5.619 15.033 5.619 11.377C5.619 10.227 6.01 9.312 6.649 8.609C6.546 8.35 6.203 7.283 6.747 5.977C6.747 5.977 7.586 5.702 9.496 7.12C10.295 6.888 11.15 6.772 12 6.768C12.85 6.772 13.705 6.888 14.504 7.12C16.414 5.702 17.253 5.977 17.253 5.977C17.797 7.283 17.454 8.35 17.351 8.609C17.99 9.312 18.381 10.227 18.381 11.377C18.381 15.046 16.04 15.988 13.813 16.238C14.172 16.556 14.493 17.185 14.493 18.133C14.493 19.555 14.481 20.68 14.481 21.001C14.481 21.276 14.66 21.588 15.167 21.488C19.138 20.333 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
                <span>github.com/KostaV0108</span>
              </a>
              <a href="https://www.linkedin.com/in/kosta-velev-767b4024a/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.367C3.274 4.224 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.224 7.401 5.367C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
