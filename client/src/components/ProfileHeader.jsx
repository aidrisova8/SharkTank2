import { FaPeopleArrows } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
const ProfileHeader = () => {
  return (
    <div className="flex">
<div className="flex">
<FaPeopleArrows className="connect-icon" />
<h2>Connect</h2>
</div>
<div className="flex w-20" >
    <img src="/headshot0.jpeg" alt=""  />
</div>

<div className="flex">
<FaCommentDots className="msg-icon" />
<h2>Message</h2>
</div>
    </div>
  )
}

export default ProfileHeader