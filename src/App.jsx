import React from 'react'
import FakePlayer from './components/FakePlayer.jsx'

export default function App() {
  const title = 'Watch Rugby Live Streaming HD'
  return (
    <div className="h-screen bg-gray-800 text-white">
      <h1 className="text-white text-center text-3xl py-12 font-medium">
        {title}
      </h1>
      <FakePlayer title={title} />
    </div>
  )
}
