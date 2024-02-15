'use server'
import { app } from '@/lib/firebase/app'
import { getFirestore, collection, getDocs, query, where, orderBy, and } from 'firebase/firestore'
import { Coupon } from './icoupon'

interface GetCouponsDTO {
  isUsed: boolean
}

const getCoupons = async (dto: GetCouponsDTO): Promise<Coupon[]> => {
  const db = getFirestore(app)
  const Coupons: Coupon[] = []

  const couponRef = collection(db, 'coupon')
  const q = query(couponRef, where('used', '==', dto.isUsed), orderBy('expire_at', 'asc'))
  const couponDocs = await getDocs(q)
  couponDocs.forEach((coupon) => {
    const couponData: Coupon = {
      id: coupon.id,
      name: coupon.data().name,
      imageUrl: coupon.data().image_url,
      used: coupon.data().used,
      expireAt: coupon.data().expire_at.toDate().toLocaleDateString('ko-KR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    }
    Coupons.push(couponData)
  })
  return Coupons
}

export default getCoupons
