import Link from 'next/link'
import {FaGithub, FaLinkedin, FaEnvelope, FaInstagram} from 'react-icons/fa'
import {appVersion} from "@/lib/constants";

export default function Footer() {

    return (
        <footer
            className="mt-4 py-6 text-center text-sm text-gray-500 px-4 border-t
            dark:border-gray-800 border-gray-300 dark:bg-black"
            id="footerPortfolio"
        >
            <div className="flex justify-center gap-6 mb-2 text-lg">
                <Link
                    href="https://github.com/lanxic"
                    aria-label="GitHub"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                >
                    <FaGithub/>
                </Link>
                <Link
                    href="/"
                    aria-label="LinkedIn"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                >
                    <FaLinkedin/>
                </Link>
                <Link
                    href="/"
                    aria-label="Instagram"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                >
                    <FaInstagram/>
                </Link>
                <Link
                    href="mailto:lanxic@gmail.com"
                    target="_blank"
                    aria-label="Email"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                >
                    <FaEnvelope/>
                </Link>
            </div>

            {/* Copyright section */}
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} ARicho. All rights reserved.</p>

            {/* Display version & Link to GitHub Repo */}
            {/* You can update or remove this for your own template */}
            <p className="text-xs sm:text-sm">
                <span
                    className="font-semibold hover:text-blue-500 transition-colors duration-200"
                >
                        v{appVersion}
                    </span>
                &nbsp;— built by&nbsp;
                <Link href="https://github.com/lanxic" rel="noopener noreferrer">
                    <span
                        className="font-semibold hover:text-blue-500 transition-colors duration-200"
                    >
                        @lanxic
                    </span>
                </Link>
                &nbsp;forked from&nbsp;<Link href={'https://github.com/alemoraru/nextjs-portofolio-website'}>@alemoraru</Link>
            </p>
        </footer>
    )
}
