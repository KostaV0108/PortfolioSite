import React from 'react'

const About = () => {
  const skills = [
    'HTML', 'REACT', 'EXPRESS.JS', 'JAVASCRIPT', 'CSS', 'MONGODB',
    'GIT', 'NEXT.JS', 'NODE.JS', 'PYTHON', 'C++', 'JAVA',
    'POSTGRESQL', 'MYSQL', 'DOCKER', 'DJANGO'
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p className="about-text">
            Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React, and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I'm not at my computer I like to spend my time reading, keeping fit and playing guitar.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

