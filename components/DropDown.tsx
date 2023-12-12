'use client'

import { useState } from 'react'

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('전체')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = (text: string) => {
    setIsOpen(false)
    setText(text)
  }

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div tabIndex={0} role="button" className="btn m-1">
        {text}
      </div>
      {isOpen && (
        <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
          <li onClick={() => closeDropdown('전체')}>
            <button>전체</button>
          </li>
          <li onClick={() => closeDropdown('미사용 쿠폰')}>
            <button>미사용 쿠폰</button>
          </li>
          <li onClick={() => closeDropdown('사용할 쿠폰')}>
            <button>사용한 쿠폰</button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default DropDown
