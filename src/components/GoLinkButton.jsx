import React from 'react'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

export default function GoLinkButton({ link, children }) {
  return (
    <a
      href={link}
      className="group mr-auto inline-flex items-center bg-red-600 text-white uppercase font-medium py-3 px-6 duration-300 rounded shadow hover:scale-110"
    >
      <span className="mr-2">{children}</span>
      <IoChevronForwardCircleOutline className="duration-300 scale-150 group-hover:translate-x-1" />
    </a>
  )
}
