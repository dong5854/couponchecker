'use client'
import { UploadResult, ref, uploadBytes } from 'firebase/storage'
import { app } from '@/lib/firebase/app'
import { getStorage, getDownloadURL } from 'firebase/storage'

interface UploadFileInterface {
  file: File
  name: string
  expireDate: Date
}

const UploadFile = (uploadFile: UploadFileInterface): Promise<string> => {
  const storage = getStorage(app, process.env.FB_STORAGE_BUCKET)

  const storageRef = ref(
    storage,
    `couponchecker/${uploadFile.expireDate.toISOString()}-${uploadFile.name}-${
      uploadFile.file.name
    }`
  )

  return new Promise((resolve, reject) => {
    uploadBytes(storageRef, uploadFile.file).then(
      (snapshot: UploadResult) => {
        console.log(`upload complete at ${snapshot.ref.fullPath}`)
        getDownloadURL(snapshot.ref).then((url: string) => {
          console.log(url)
          resolve(url)
        })
      },
      (error) => {
        console.log(error)
        reject(error)
      }
    )
  })
}

export { UploadFile }
export type { UploadFileInterface }
