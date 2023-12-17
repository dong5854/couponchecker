'use client'

import {
  Condition,
  conditionAll,
  conditonUnUsed,
  conditionUsed,
} from '@/app/api/notion/queryCouponsCondition'
import React, { useState } from 'react'

interface DropDownProps {
  initCondition: Condition
  updateCondition: (condition: Condition) => void
}

const DropDown: React.FC<DropDownProps> = ({ initCondition, updateCondition }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(initCondition.text)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = (
    e: React.MouseEvent | React.TouchEvent,
    text: string,
    condition: Condition
  ) => {
    e.preventDefault()
    setText(text)
    updateCondition(condition)
    setIsOpen(false)
  }

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div tabIndex={0} role="button" className="btn m-1">
        {text}
      </div>
      {isOpen && (
        <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
          {[conditionAll, conditonUnUsed, conditionUsed].map((condition, index) => {
            return (
              <li
                role="button"
                key={index}
                onClick={(e) => closeDropdown(e, condition.text, condition)}
                onTouchEnd={(e) => closeDropdown(e, condition.text, condition)}
              >
                <button>{condition.text}</button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default DropDown
