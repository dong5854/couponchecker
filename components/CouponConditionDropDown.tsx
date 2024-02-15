'use client'

import React, { useState } from 'react'

interface DropDownProps {
  isUsed: boolean
  updateUsed: (isUsed: boolean) => void
}

const DropDown: React.FC<DropDownProps> = ({ isUsed, updateUsed }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(isUsed ? '사용 쿠폰' : '미사용 쿠폰')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = (e: React.MouseEvent | React.TouchEvent, isUsed: boolean) => {
    e.preventDefault()
    setText(isUsed ? '사용 쿠폰' : '미사용 쿠폰')
    updateUsed(isUsed)
    setIsOpen(false)
  }

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div tabIndex={0} role="button" className="btn m-1">
        {text}
      </div>
      {isOpen && (
        <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
          {[true, false].map((isUsed, index) => {
            return (
              <li
                role="button"
                key={index}
                onClick={(e) => closeDropdown(e, isUsed)}
                onTouchEnd={(e) => closeDropdown(e, isUsed)}
              >
                <button>{isUsed ? '사용 쿠폰' : '미사용 쿠폰'}</button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default DropDown
