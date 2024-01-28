'use client'

import React from 'react'
import TextInput from './TextInput'
import CouponExpireDatePicker from './CouponExpireDatePicker'
import FileInput from './FileInput'

const CouponUploadModal = () => {
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
          <FileInput topLeftLabel="쿠폰을 업로드해주세요." />
          <TextInput placeHolder="쿠폰명을 입력하세요." topLeftLabel="쿠폰명" />
          <CouponExpireDatePicker />
          <button className="btn btn-success form-control mx-auto w-full max-w-xs">업로드</button>
        </div>
      </dialog>
    </>
  )
}

export default CouponUploadModal
