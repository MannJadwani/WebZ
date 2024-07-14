import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import { dark } from '@clerk/themes'
import { ThemeProvider } from '../../providers/theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning >
        <body>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

          >
            {children}

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider >
  )
}