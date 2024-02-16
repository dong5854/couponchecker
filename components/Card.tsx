import React from 'react'
import Image from './Image'
import Link from './Link'
import Modal from './Modal'
import { Coupon } from '@/app/api/firestore/icoupon'

interface CardProps {
  coupon: Coupon
}

const Card: React.FC<CardProps> = ({ coupon }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        coupon.imageUrl && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {coupon.imageUrl && (
        <Link href={coupon.imageUrl} aria-label={`Link to ${coupon.imageUrl}`}>
          <Image
            alt={coupon.name}
            src={coupon.imageUrl}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        </Link>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {coupon.imageUrl ? (
            <Link href={coupon.imageUrl} aria-label={`Link to ${coupon.name}`}>
              {coupon.name}
            </Link>
          ) : (
            coupon.name
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          사용만료일:{' '}
          {coupon.expireAt.toLocaleDateString('ko-KR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        {coupon.imageUrl && <Modal coupon={coupon} isUsed={coupon.used} />}
      </div>
    </div>
  </div>
)

export default Card
