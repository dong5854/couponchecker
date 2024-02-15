'use client'
import Card from '@/components/Card'
import getCoupons from './api/firestore/getCoupons'
import { NotionQueryResult, queryCoupons } from './api/notion/queryCoupons'
import { Condition, conditonUnUsed } from './api/notion/queryCouponsCondition'
import CouponConditionDropDown from '@/components/CouponConditionDropDown'
import CouponUploadModal from '@/components/CouponUploadModal'
import { useState, useEffect } from 'react'
import { Coupon } from './api/firestore/icoupon'

export const dynamic = 'force-dynamic'

export default function Page() {
  const [couponsResponse, setCouponsResponse] = useState<Coupon[] | null>(null)
  const [isUsed, setIsUsed] = useState(false)
  useEffect(() => {
    const resp = async () => {
      const resp = await getCoupons({ isUsed })
      setCouponsResponse(resp)
    }
    resp()
  }, [isUsed])
  const updateUsed = (isUsed: boolean) => {
    setIsUsed(isUsed)
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            쿠폰함
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            쿠폰의 사용을 체크하세요.
          </p>
        </div>
        <div className="container py-1">
          <CouponConditionDropDown isUsed={isUsed} updateUsed={updateUsed} />
          <CouponUploadModal />
          <div className="-m-4 flex flex-wrap">
            {couponsResponse?.map((coupon) => (
              <Card
                key={coupon.id}
                pageId={coupon.id}
                title={coupon.name}
                dueDate={coupon.expireAt}
                imgSrc={coupon.imageUrl}
                href={coupon.imageUrl}
                isUsed={coupon.used}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
