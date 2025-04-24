import { useState } from "react";
import Navbar from "./assets/components/Navbar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-  font-bold text-blue-600">Tailwind  is working!</h1>
      </div>
    </div>
  );
}

export default App;
