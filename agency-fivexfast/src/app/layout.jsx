import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

// import components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Marketing Services | Fivexfast',
  description:
    'Explore comprehensive digital marketing services at [Your Business Name]. From understanding your audience to prototyping solutions, our data-driven approach ensures measurable results for your brand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressContentEditableWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
