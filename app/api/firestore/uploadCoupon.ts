'use server'
import { app } from '@/lib/firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { Coupon } from './icoupon'

const uploadCoupon = async (couponJSON: string): Promise<string> => {
  const db = getFirestore(app)
  const coupon: Coupon = JSON.parse(couponJSON)
  const couponRef = await addDoc(collection(db, 'coupon'), {
    expire_at: coupon.expireAt,
    name: coupon.name,
    image_url: coupon.imageUrl,
    used: coupon.used,
  })
  return `Coupon uploaded with ID: ${couponRef.id}`
}

export default uploadCoupon
