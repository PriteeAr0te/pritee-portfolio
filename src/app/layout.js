// layout.js
import { Header } from "@/components/layout/Header"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Pritee Arote | React & MERN Stack Developer Portfolio",
  description:
    "Explore the modern portfolio of Pritee Arote — a React & MERN stack developer focused on building high-performance web apps with clean UI, motion effects, and real-world features.",
  openGraph: {
    title: "Pritee Arote | React & MERN Stack Developer Portfolio",
    description:
      "Creative portfolio of Pritee Arote, showcasing React projects, MERN stack skills, and modern UI with motion effects.",
    url: "https://your-portfolio-domain.com",
    siteName: "Pritee Arote Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pritee Arote Portfolio Preview",
      },
    ],
  },
  authors: [{ name: "Pritee Arote" }],
  creator: "Pritee Arote",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="pt-[60px]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
