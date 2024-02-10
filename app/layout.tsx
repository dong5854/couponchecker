import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'css/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'coupon-checker',
  description: '쿠폰을 공유하고 사용을 체크하세요',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" crossOrigin="use-credentials" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" />
      <body
        className={`mx-auto flex h-screen max-w-3xl flex-col justify-between px-4 font-sans sm:px-6 xl:max-w-5xl xl:px-0 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}
