import { FaPeopleArrows } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
const ProfileHeader = () => {
  return (
    <div className="flex items-center justify-around p-4 bg-pink-200 ">
    <div className="flex items-center">
      <FaPeopleArrows className="connect-icon text-2xl mr-2" />
      <a href="/connect" className="text-lg font-semibold">
        Connect
      </a>
    </div>
    <div className="flex items-center w-20">
      <img src="/headshot0.jpeg" alt="" className="w-full h-full object-cover rounded-full" />
    </div>
    <div className="flex items-center">
      <FaCommentDots className="msg-icon text-2xl mr-2" />
      <a href="/message" className="text-lg font-semibold">
        Message
      </a>
    </div>
  </div>
  )
}

export default ProfileHeader