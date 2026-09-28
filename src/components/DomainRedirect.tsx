'use client'

import {useEffect, useState} from "react";

const OLD_DOMAIN = 'lanxic.my.id'
const NEW_DOMAIN = 'alexmanroe.my.id'
const NEW_ORIGIN = `https://${NEW_DOMAIN}`
const COUNTDOWN_START = 5

/**
 * Full-screen notice shown on the old domain. Counts down from 5 to 0, then sends the visitor
 * to the same path on the new domain. Styled in neo brutalism (thick borders, hard shadows, flat bright colors).
 */
export default function DomainRedirect() {
    const [count, setCount] = useState(COUNTDOWN_START)
    const [target, setTarget] = useState(NEW_ORIGIN)

    // Keep the current path/query/hash so deep links still land on the right page.
    useEffect(() => {
        const {pathname, search, hash} = window.location
        setTarget(`${NEW_ORIGIN}${pathname === '/' ? '' : pathname}${search}${hash}`)
    }, [])

    useEffect(() => {
        if (count <= 0) {
            window.location.replace(target)
            return
        }
        const timer = setTimeout(() => setCount((c) => c - 1), 1000)
        return () => clearTimeout(timer)
    }, [count, target])

    const progress = ((COUNTDOWN_START - count) / COUNTDOWN_START) * 100

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-[#FFE500] text-black flex items-center justify-center p-4 sm:p-8"
            style={{
                backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
            }}
        >
            <main className="relative w-full max-w-2xl">
                <div
                    className="absolute -top-4 -left-2 sm:-left-4 z-10 rotate-[-4deg] border-4 border-black bg-[#FF5C8A] px-3 py-1 text-sm sm:text-base font-black uppercase shadow-[4px_4px_0_0_#000]">
                    Pemberitahuan
                </div>

                <div className="border-4 border-black bg-white p-6 sm:p-10 shadow-[10px_10px_0_0_#000]">
                    <h1 className="mt-2 text-2xl sm:text-4xl font-black uppercase leading-tight">
                        Halaman sedang dialihkan ke domain baru
                    </h1>

                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 font-mono text-sm sm:text-base font-bold">
                        <span className="border-4 border-black bg-[#FF5C8A] px-3 py-2 line-through decoration-4 break-all">
                            {OLD_DOMAIN}
                        </span>
                        <span aria-hidden className="text-2xl font-black sm:mx-1 rotate-90 sm:rotate-0 self-start sm:self-auto">→</span>
                        <span className="border-4 border-black bg-[#3DDC97] px-3 py-2 break-all">
                            {NEW_DOMAIN}
                        </span>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                        <div
                            role="timer"
                            aria-live="polite"
                            aria-label={`Dialihkan dalam ${count} detik`}
                            className="flex h-32 w-32 shrink-0 items-center justify-center border-4 border-black bg-[#4DA3FF] text-7xl font-black tabular-nums shadow-[6px_6px_0_0_#000]"
                        >
                            {count}
                        </div>

                        <div className="w-full">
                            <p className="mb-2 text-sm sm:text-base font-black uppercase">
                                {count > 0 ? `Dialihkan dalam ${count} detik…` : 'Mengalihkan…'}
                            </p>
                            <div className="h-8 border-4 border-black bg-white">
                                <div
                                    className="h-full border-r-4 border-black bg-black transition-[width] duration-1000 ease-linear"
                                    style={{width: `${progress}%`}}
                                />
                            </div>
                        </div>
                    </div>

                    <a
                        href={target}
                        className="mt-8 inline-block border-4 border-black bg-[#FFE500] px-5 py-3 text-base font-black uppercase shadow-[5px_5px_0_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2"
                    >
                        Langsung ke situs baru →
                    </a>

                    <noscript>
                        <p className="mt-4 text-sm font-bold">
                            JavaScript nonaktif. Silakan buka <a className="underline" href={NEW_ORIGIN}>{NEW_ORIGIN}</a>.
                        </p>
                    </noscript>
                </div>
            </main>
        </div>
    )
}
