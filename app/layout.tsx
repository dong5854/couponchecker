import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'css/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'coupon-checker',
  description: '쿠폰을 공유하고 사용을 체크하세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
          <body className={`flex h-screen flex-col justify-between font-sans mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 ${inter.className}`}>{children}</body>
    </html>
  )
}
