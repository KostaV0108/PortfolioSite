import React from 'react'

const Extracurricular = () => {
  const activities = [
    'Organized and hosted monthly tournaments and weekly casual events, increasing member engagement by 50%.',
    'Managed club finances, overseeing budget allocations for event prizes, new card sets, and promotional materials.',
    'Mediated disputes between club members, fostering a welcoming and inclusive community.',
    'Established partnerships with local game stores, securing sponsorships and discounts for club members.'
  ]

  return (
    <section id="extracurricular" className="extracurricular">
      <div className="container">
        <h2 className="section-title">Extracurricular Activities</h2>
        <div className="extracurricular-item">
          <h3>President, Magic: The Gathering Club</h3>
          <p className="extracurricular-location">Seneca Polytechnic, 2023 – Present</p>
          <ul className="extracurricular-details">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Extracurricular

