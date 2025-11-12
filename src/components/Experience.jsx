import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Software Intern – App and Web Design with Implementation',
      date: 'May 2025 – September 2025',
      company: 'Clarity Health Solutions, Remote intern position',
      details: [
        'Designed and prototyped responsive app and web interfaces in Figma, ensuring WCAG-compliant accessibility.',
        'Implemented front-end components using HTML, CSS, and React, integrated with a Django/Python backend for seamless data flow.',
        'Integrated OpenAI APIs (ChatGPT) for intelligent data processing and automation features.',
        'Managed database operations with PostgreSQL and MySQL, ensuring data consistency and security.',
        'Deployed applications using Docker and GitHub Actions, establishing basic CI/CD pipelines for testing and staging environments.',
        'Conducted API performance benchmarking and implemented caching strategies for reduced response times.'
      ]
    },
    {
      title: 'QA Analyst – AI Model Optimization',
      date: 'June 2024 – September 2024',
      company: 'Data Annotation, Remote crowdsourcing job',
      details: [
        'Conducted in-depth quality analysis on AI-generated code, improving accuracy by optimizing validation processes.',
        'Debugged AI-generated responses across Python, C++, and Java, enhancing model reliability.',
        'Evaluated natural language responses for clarity, correctness, and relevance to enhance AI performance.'
      ]
    },
    {
      title: 'QA Analyst – Game Testing & Performance Optimization',
      date: 'October 2020 - January 2021',
      company: 'Gamepill, Concord ON',
      details: [
        'Contributed to a bug-tracking initiative that reduced issue resolution time by 40%, accelerating the game\'s development cycle.',
        'Conducted extensive playtesting and reported over 100+ critical bugs, directly contributing to improvement in game stability.',
        'Collaborated with developers to implement real-time performance metrics, leading to a 15% reduction in memory usage and smoother gameplay.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="experience-date">{exp.date}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              <ul className="experience-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

