import React, { useState } from "react"

const App = () => {
  const [room, setRoom] = useState(0)
  return (
    <div>
      <div className="px-2">hello</div>
      <div className="px-12">{room}</div>
      <button onClick={() => setRoom(room + 1)}>wow</button>
    </div>
  )
}

export default App