import React from 'react'

import FakePlayer from './FakePlayer.jsx'
import LiveNowSlider from './LiveNowSlider.jsx'
import GoLinkButton from './GoLinkButton'
import Footer from './Footer'

export default function GamePage({ link, title, image, liveItems }) {
  React.useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div className="h-screen">
      <h1 className="text-white text-center text-3xl py-12 px-4 font-medium">
        {title}
      </h1>
      <FakePlayer link={link} image={image} title={title} />
      <div className="mt-12 text-center">
        <span className="inline-block m-2">
          <GoLinkButton link={link}>Watch Now</GoLinkButton>
        </span>
        <span className="inline-block m-2">
          <GoLinkButton link={link}>Sign Up Now</GoLinkButton>
        </span>
      </div>
      <LiveNowSlider items={liveItems} link={link} />
      <Footer />
    </div>
  )
}
