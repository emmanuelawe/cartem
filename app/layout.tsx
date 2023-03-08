import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Cartem Store',
  description: 'Shopping made easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='bg-gray-100'>
        {children}
        </main>
        </body>
    </html>
  )
}
