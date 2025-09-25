import type {Metadata} from "next";
import "./globals.css";
import {Gabarito} from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import React, {ReactNode} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const gabarito = Gabarito({
    variable: "--font-gabarito",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
    icons: {
        icon: '/icons/favicon.ico',
        shortcut: '/icons/favicon.ico',
        apple: '/icons/favicon.ico',
    },
    metadataBase: new URL('https://lanxic.my.id'),
    openGraph: {
        title: 'ARicho - Developer Engineering Portfolio',
        description: 'This site serves as a space for my technical documentation and real-world experiences throughout my journey in DevOps engineering.',
        url: 'https://lanxic.my.id',
        siteName: 'ARicho - Developer Engineering Portfolio',
        images: [
            {
                url: 'https://avatars.githubusercontent.com/u/13657184?s…00&u=01e3933d1a0df3e79df6cf7982656b85ff0efbe5&v=4',
                width: 1200,
                height: 630,
                alt: 'ARicho - Developer Engineering Portfolio'
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ARicho - Developer Engineering Portfolio',
        description: 'This site serves as a space for my technical documentation and real-world experiences throughout my journey in DevOps engineering.',
        images: ['https://avatars.githubusercontent.com/u/13657184?s…00&u=01e3933d1a0df3e79df6cf7982656b85ff0efbe5&v=4']
    }
}

// This script initializes the theme based on user preference or saved settings
// And is used to avoid FOUC (Flash of Unstyled Content) on the initial load
const themeInitScript = `
(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch(e) {}
})();`

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={`${gabarito.className} ${gabarito.variable}`} suppressHydrationWarning>
        <head>
            <title>ARicho - Developer Engineering Portfolio</title>
        </head>
        <body
            className={`antialiased flex flex-col min-h-screen transition-colors ${gabarito.className} ${gabarito.variable}`}
        >
        {/* Dot Background Layer */}
        {/*<div*/}
        {/*    className={`*/}
        {/*    fixed inset-0 -z-10*/}
        {/*    bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)]*/}
        {/*    dark:bg-[radial-gradient(circle,_#3f3f46_1px,_transparent_1px)]*/}
        {/*    bg-[length:30px_30px]*/}
        {/*    [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]*/}
        {/*  `}*/}
        {/*/>*/}

        <Header/>
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <Footer/>
        </body>
        </html>
    )
}
