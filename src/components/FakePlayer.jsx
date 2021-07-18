import React from 'react'
import {
  IoPlayCircleSharp,
  IoPlaySharp,
  IoVolumeHighSharp,
  IoSettingsSharp,
  IoExpandSharp,
  IoCheckmarkCircleSharp,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5'

export default function FakePlayer({ title }) {
  const modalDelay = 2000
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
      <div
        onClick={handlePlayerClick}
        className="group relative max-w-5xl mx-auto bg-black pb-[40%] cursor-pointer"
      >
        <div className="absolute inset-0 h-full w-full flex items-center justify-center">
          {spin ? (
          <Spiner />
        ) : (
          <>
            <img
              className="absolute inset-0 h-full w-full object-contain duration-300 group-hover:opacity-75"
              src="https://imgur.com/CM3jbTe.jpg"
            />
            <PlayButton />
            <Controls />
          </>
        )}
        </div>
      </div>
      {openModal && <Modal title={title} />}
    </>
  )
}

function Spiner() {
  return (
    <span className="animate-spin absolute p-8 rounded-full border-4 border-red-500 border-r-gray-900" />
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
          </span>{' '}
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

function Modal({ title }) {
  return (
    <div className="animate-slideUp fixed flex flex-col inset-0 bg-black">
      <div className="relative w-full max-w-2xl m-auto">
        <img
          className="absolute opacity-25 inset-0 h-full w-full object-cover duration-300 group-hover:opacity-75"
          src="https://imgur.com/CM3jbTe.jpg"
        />
        <h2 className="absolute text-gray-300 text-center w-full -mt-20 text-3xl font-medium">{title}</h2>
        <div className="grid grid-cols-2 gap-16 relative py-24 px-12">
          <button className="group self-center mr-auto flex items-center bg-red-600 text-white uppercase font-medium py-3 px-6 duration-300 rounded shadow hover:scale-110">
            <span className="mr-2">Create Account</span> <IoChevronForwardCircleOutline className="duration-300 scale-150 group-hover:translate-x-2" />
          </button>
          <ul className="text-gray-300 space-y-2">
            <ListItem>Unlimited game access</ListItem>
            <ListItem>Search for any game</ListItem>
            <ListItem>Ads free</ListItem>
            <ListItem>Support for all platforms</ListItem>
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
