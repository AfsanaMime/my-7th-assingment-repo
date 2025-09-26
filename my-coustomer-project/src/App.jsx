
import { useState } from 'react'
import Navbar from './Component/Navbar'
import './App.css'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
   <div className="w-full border-t-2 border-b-2 border-blue-400 my-12 px-5">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 gap-x-8">
    
    {/* In-Progress Card */}
    <div
      className="flex flex-col items-center justify-center py-12 text-white w-full rounded-lg"
      style={{ background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" }}
    >
      <p className="text-lg font-semibold">In-Progress</p>
      <h2 className="text-5xl font-bold mt-4">0</h2>
    </div>

    {/* Resolved Card */}
    <div
      className="flex flex-col items-center justify-center py-12 text-white w-full rounded-lg"
      style={{ background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" }}
    >
      <p className="text-lg font-semibold">Resolved</p>
      <h2 className="text-5xl font-bold mt-4">0</h2>
    </div>
    
  </div>
</div>
<Footer />
    </div>
  )
}


export default App
