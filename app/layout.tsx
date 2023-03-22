import Header from '@/components/Header'
import { SessionProvider } from '@/components/SessionProvider'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import './globals.css'

export const metadata = {
  title: 'Cartem Store',
  description: 'Shopping made easy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
        <Header />
        <main className='bg-gray-100'>
        {children}
        </main>
        </SessionProvider>
        </body>
    </html>
  )
}
