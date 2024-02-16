'use server'
import { app } from '@/lib/firebase/app'
import { getFirestore, doc, updateDoc } from 'firebase/firestore'
import { Coupon } from './icoupon'

const updateCoupon = async (couponJSON: string): Promise<void> => {
  const db = getFirestore(app)
  const coupon: Coupon = JSON.parse(couponJSON)
  const couponRef = doc(db, 'coupon', coupon.id!)
  await updateDoc(couponRef, {
    expire_at: coupon.expireAt,
    name: coupon.name,
    image_url: coupon.imageUrl,
    used: coupon.used,
  })
  return
}

export default updateCoupon
