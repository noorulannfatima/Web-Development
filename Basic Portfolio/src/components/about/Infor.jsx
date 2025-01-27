import React from 'react'

const Infor = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Expereince</h3>
            <span className="about__subtitles"> 8 Years Working</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt-2 about__icon'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitles">48 + Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>

            <h3 className="about__title">Support</h3>
            <span className="about__subtitles">Online 24/7</span>
        </div>
    </div>
  )
}

export default Infor
