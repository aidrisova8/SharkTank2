import React from 'react'

const ProfileBody = () => {
  return (
    <div className='container'>
        <div className='inside'>
          <p className='name'>NAME</p>
          <p className='location'>LOCATION</p>
          <p className="title">TITLE</p>
          <p className='comments'><a href="#"><i class="fa fa-dribbble"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          </p>

          <button className='button'>Show more</button>
        </div>
        
      </div>
  )
}

export default ProfileBody