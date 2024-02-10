'use client'

import React, { useEffect, useState } from 'react'

import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const css = `
  .rdp-months {
    justify-content : center;
  }
  .rdp {
    margin-top : 0;
    min-height : 320px;
  }
  .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
    background-color : #006400;
  }
`

interface DatePickerProps {
  initialDate?: Date
  onDateChange: (date: Date) => void
}

const CouponExpireDatePicker: React.FC<DatePickerProps> = (DatePickerProps) => {
  const [selected, setSelected] = useState<Date | undefined>(DatePickerProps.initialDate)

  useEffect(() => {
    DatePickerProps.onDateChange(selected!)
  })

  let label = <p>쿠폰 만료 기간을 선택해주세요.</p>
  if (selected) {
    label = <p>쿠폰 만료 기간은 {format(selected, 'PPP', { locale: ko })} 입니다.</p>
  }
  return (
    <>
      <style>{css}</style>
      <label className="form-control mx-auto mt-0.5 w-full  max-w-xs">
        <span className="label-text">{label}</span>
      </label>
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
    </>
  )
}

export default CouponExpireDatePicker
