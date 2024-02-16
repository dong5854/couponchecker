'use server'
import { app } from '@/lib/firebase/app'
import { getFirestore, collection, doc, setDoc, updateDoc } from 'firebase/firestore'
import { Coupon } from './icoupon'

interface UploadCouponsDTO {
  name: string
  imageUrl: string
  used: boolean
  expireAt: string
}

const uploadCoupon = async (coupon: Coupon): Promise<void> => {
  const db = getFirestore(app)
  const couponRef = doc(db, 'coupon', coupon.id)
  await updateDoc(couponRef, { coupon })
  return
}

export default uploadCoupon
