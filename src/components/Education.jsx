import React from 'react'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>Seneca Polytechnic</h3>
            <span className="education-location">Toronto, ON</span>
          </div>
          <p className="education-degree">Honors Bachelor of Software Development</p>
          <p className="education-date">Sept 2022 - Present</p>
          <p className="education-courses">
            Relevant Coursework: Data Communications, Advanced Web Development, Mobile App Development, Statistics for Developers, Data Structures and Algorithms, and Project Management.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education

