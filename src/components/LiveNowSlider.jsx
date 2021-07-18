import React from 'react'
import { useKeenSlider } from 'keen-slider/react'

import GoLinkButton from './GoLinkButton'

import 'keen-slider/keen-slider.min.css'

export default function LiveNowSlider({ items, link }) {
  const holdTime = 3000
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    slidesPerView: 1,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, holdTime)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div
      ref={sliderRef}
      className="mt-12 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 keen-slider"
    >
      {items.map(({ title, affiliate }, idx) => (
        <SlideLinkItem key={idx} link={affiliate}>
          {title}
        </SlideLinkItem>
      ))}
    </div>
  )
}

function SlideLinkItem({ link, children }) {
  return (
    <div className="text-center p-8 flex flex-col justify-center md:p-12 keen-slider__slide">
      <h2 className="text-3xl">{children}</h2>
      <div className="mt-8">
        <GoLinkButton link={link}>Go Live Now</GoLinkButton>
      </div>
    </div>
  )
}
