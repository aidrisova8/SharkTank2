import React from 'react'
import ProfileBody from "../components/ProfileBody"
import ProfileHeader from "../components/ProfileHeader"

const Profile = () => {
  return (
    <div className="relative">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
      }}
    />
    <div className="flex flex-col max-w-2xl mx-auto relative">
      <ProfileHeader />
      <ProfileBody />
    </div>
  </div>
  )
}

export default Profile