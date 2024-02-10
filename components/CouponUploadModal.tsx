'use client'

import React, { useState } from 'react'
import TextInput from './TextInput'
import CouponExpireDatePicker from './CouponExpireDatePicker'
import FileInput from './FileInput'
import { TestUpload } from '@/app/api/storage/uploadFile'

const CouponUploadModal = () => {
  const [file, setFile] = useState<File>()
  const [name, setName] = useState<String>('')
  const [expire, setExpire] = useState<Date>(new Date())

  const handleFileChange = (fileData: File) => setFile(fileData)
  const handleNameChange = (name: string) => setName(name)
  const handleDateChange = (expire: Date) => setExpire(expire)

  const fileUpload = () => {
    console.log(file)
    console.log(name)
    console.log(expire)
  }

  return (
    <>
      <button
        className="btn"
        onClick={() =>
          (document.getElementById('coupon-upload-modal') as HTMLDialogElement).showModal()
        }
      >
        쿠폰 업로드
      </button>
      <dialog id="coupon-upload-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
          </form>
          <h3 className="mx-auto text-center text-lg">쿠폰을 업로드</h3>
          <FileInput onFileChange={handleFileChange} topLeftLabel="쿠폰을 업로드해주세요." />
          <TextInput
            onTextChange={handleNameChange}
            placeHolder="쿠폰명을 입력하세요."
            topLeftLabel="쿠폰명"
          />
          <CouponExpireDatePicker initialDate={expire} onDateChange={handleDateChange} />
          <button
            onClick={fileUpload}
            className="btn btn-success form-control mx-auto w-full max-w-xs"
          >
            업로드
          </button>
        </div>
      </dialog>
    </>
  )
}

export default CouponUploadModal
