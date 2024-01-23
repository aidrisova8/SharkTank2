import { Routes , Route } from "react-router-dom"
import Profile from "./components/Profile"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/register" element={null} />
        <Route path="/login" element={null} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
