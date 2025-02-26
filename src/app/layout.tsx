import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Link from 'next/link'
import Image from "next/image";


export const metadata: Metadata = {
  title: "John Doe - Web Developer",
  description: "Personal CV website of John Doe, Web Developer",
}

const externalSites = [
  {
    name: "GitHub",
    url: "https://github.com/LukMRVC",
    icon: "/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lukáš-moravec-0446b120a",
    icon: "/linked.svg",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-mono">
        {/* Header */}
        <header className="p-6 flex justify-between items-center border-b-8 border-neo-text">
          <h1 className="text-4xl font-bold">Lukáš Moravec</h1>
          <nav>
            <ul className="flex space-x-8">
              {externalSites.map((site) => (
                <li
                  key={site.name}
                >
                  <a
                    href={site.url}
                    rel='noreferrer noopener'
                    target='_blank'
                  >
                    <Image
                      style={{ filter: 'invert(0.5) sepia(1) saturate(5) hue-rotate(180deg)' }}
                      alt={site.name}
                      src={`${site.icon}`}
                      width={50}
                      height={50}
                    />
                  </a>

                </li>
              ))}

            </ul>
          </nav>
        </header>
        <main>
          {children}

        </main>
      </body>
    </html>
  )
}

