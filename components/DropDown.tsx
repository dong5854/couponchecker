'use client'

import {
  Condition,
  conditionAll,
  conditonUnUsed,
  conditionUsed,
} from '@/app/api/notion/queryCouponsCondition'
import React, { useState } from 'react'

interface DropDownProps {
  updateCondition: (condition: Condition) => void
}

const DropDown: React.FC<DropDownProps> = ({ updateCondition }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('전체')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = (
    e: React.MouseEvent | React.TouchEvent,
    text: string,
    condition: Condition
  ) => {
    e.stopPropagation()
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
          <li
            role="button"
            onClick={(e) => closeDropdown(e, '전체', conditionAll)}
            onTouchEnd={(e) => closeDropdown(e, '전체', conditionAll)}
          >
            <button>전체</button>
          </li>
          <li
            role="button"
            onClick={(e) => closeDropdown(e, '미사용 쿠폰', conditonUnUsed)}
            onTouchEnd={(e) => closeDropdown(e, '미사용 쿠폰', conditonUnUsed)}
          >
            <button>미사용 쿠폰</button>
          </li>
          <li
            role="button"
            onClick={(e) => closeDropdown(e, '사용한 쿠폰', conditionUsed)}
            onTouchEnd={(e) => closeDropdown(e, '사용한 쿠폰', conditionUsed)}
          >
            <button>사용한 쿠폰</button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default DropDown
