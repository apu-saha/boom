import React from 'react'
import {
  IoPlayCircleSharp,
  IoPlaySharp,
  IoVolumeHighSharp,
  IoSettingsSharp,
  IoExpandSharp,
  IoCheckmarkCircleSharp,
} from 'react-icons/io5'

import GoLinkButton from './GoLinkButton'
import Spiner from './Spiner'

export default function FakePlayer({ title, image, link }) {
  const modalDelay = 1000
  const [spin, setSpin] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)

  function handlePlayerClick() {
    setSpin(true)
    setTimeout(() => {
      setOpenModal(true)
    }, modalDelay)
  }

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div
          onClick={handlePlayerClick}
          className="group relative bg-black pb-[60%] cursor-pointer"
        >
          <div className="absolute inset-0 h-full w-full flex items-center justify-center">
            <img
              className="absolute inset-0 h-full w-full object-contain duration-300 group-hover:opacity-75"
              src={image}
            />
            <img
              className="absolute w-20 lg:w-40 object-contain top-4 right-4"
              src="https://cpt.co.za/wp-content/uploads/2020/01/onbhkbuuyozxuazfm0iq.gif"
            />
            {spin && <Spiner />}
            {!spin && <PlayButton />}
            <Controls />
          </div>
        </div>
      </div>
      {openModal && <Modal title={title} img={image} link={link} />}
    </>
  )
}

function PlayButton() {
  return (
    <button className="absolute text-white p-4 bg-black/50 rounded-full duration-300 ring-8 ring-transparent group-hover:ring-red-600  group-hover:scale-75">
      <IoPlayCircleSharp className="h-16 w-16" />
    </button>
  )
}

function Controls() {
  return (
    <div className="absolute flex justify-between h-10 w-full bg-black/80 text-gray-400 bottom-0">
      <div className="flex">
        <IconButton>
          <IoPlaySharp />
        </IconButton>
        <IconButton>
          <IoVolumeHighSharp />
        </IconButton>
      </div>
      <div className="flex">
        <div className="flex items-center mr-2">
          <span className="relative h-3 w-3 mr-2">
            <span className="animate-ping absolute inset-0 bg-red-600 rounded-full" />
            <span className="absolute inset-0.5 bg-red-600 rounded-full" />
          </span>
          LIVE
        </div>
        <IconButton>
          <IoSettingsSharp />
        </IconButton>
        <IconButton>
          <IoExpandSharp />
        </IconButton>
      </div>
    </div>
  )
}

function IconButton({ children }) {
  return (
    <button className="flex items-center justify-center h-full w-10 hover:text-white hover:bg-white/5">
      {children}
    </button>
  )
}

function Modal({ title, img, link }) {
  return (
    <div className="animate-slideUp fixed z-20 flex flex-col inset-0 bg-black">
      <div className="relative w-full max-w-3xl m-auto bg-gray-900">
        <img
          className="absolute opacity-25 inset-0 h-full w-full object-cover duration-300 group-hover:opacity-75"
          src={img}
        />
        <h2 className="absolute text-gray-300 text-center w-full px-4 -mt-20 text-xl md:text-3xl font-medium">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-16 relative py-24 px-12">
          <div className="self-center text-center">
            <GoLinkButton link={link}>Create Free Account</GoLinkButton>
            <p className="mt-2 text-gray-300">Login required</p>
          </div>
          <ul className="text-gray-300 space-y-2">
            <ListItem>Unlimited game access</ListItem>
            <ListItem>Search for any game</ListItem>
            <ListItem>Ads free</ListItem>
            <ListItem>Support for all platforms</ListItem>
            <ListItem>Watch from anywhere</ListItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ListItem({ children }) {
  return (
    <li className="flex items-center">
      <IoCheckmarkCircleSharp className="mr-2" /> {children}
    </li>
  )
}
