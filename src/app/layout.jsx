import './globals.scss'
import Header from '@/components/Header'

export const metadata = {
  title: '메모앱',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
