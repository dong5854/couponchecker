'use client'

import { useState, useEffect, useCallback } from 'react'
import { Coupon } from '@/app/api/firestore/icoupon'
import updateCoupon from '@/app/api/firestore/updateCoupon'

interface ModalProps {
  coupon: Coupon
  isUsed: boolean
}

const Modal: React.FC<ModalProps> = ({ coupon, isUsed }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalIsUsed, setModalIsUsed] = useState(isUsed)

  const handleCoupon = useCallback(async () => {
    coupon.used = true
    await updateCoupon(JSON.stringify(coupon).toString())
  }, [coupon])

  const useCouponHandler = () => {
    setModalIsUsed(true)
    setIsOpen((isOpen) => !isOpen)
  }

  const useModalHandler = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
    if (modalIsUsed) {
      handleCoupon()
    }
  }, [handleCoupon, modalIsUsed])

  return (
    <>
      {modalIsUsed ? (
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
        >
          사용완료
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          사용가능
        </button>
      )}
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        정말로 사용완료 처리하겠습니까?
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          정말로 사용완료 하시겠습니까? 사용을 완료하면 취소할 수 없습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={useCouponHandler}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    사용
                  </button>
                  <button
                    type="button"
                    onClick={useModalHandler}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
