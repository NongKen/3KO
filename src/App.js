import React, { useState } from "react"
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBZ5QyZQbF8N2n1vjtqLZW0socKJQAQKiA",
//   authDomain: "it10-three-kingdoms.firebaseapp.com",
//   databaseURL: "https://it10-three-kingdoms-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "it10-three-kingdoms",
//   storageBucket: "it10-three-kingdoms.appspot.com",
//   messagingSenderId: "67551486104",
//   appId: "1:67551486104:web:a18e0cf4b8e1d8061930ed",
//   measurementId: "G-NW98FTTWNE"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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