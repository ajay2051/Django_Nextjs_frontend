"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Moon, Sun, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PortfolioPage() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [userName, setUserName] = useState("Ajay Thakur")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()

    // Check if user is logged in and get user info
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLoggedIn(true)
            // Try to get user info from localStorage if available
            const userInfo = localStorage.getItem("userInfo")
            if (userInfo) {
                try {
                    const parsedUserInfo = JSON.parse(userInfo)
                    setUserName(parsedUserInfo.name || "Ajay Thakur")
                } catch (error) {
                    console.error("Error parsing user info:", error)
                }
            }
        } else {
            // Redirect to login if not logged in
            router.push("/auth/login")
        }
    }, [router])

    // Toggle dark/light mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userInfo")
        setIsLoggedIn(false)
        router.push("/login")
    }

    return (
        <div className={`min-h-screen bg-[#0f172a] text-white`}>
            {/* Navigation */}
            <nav className="flex items-center justify-between px-4 py-4 lg:px-10">
                <div className="flex items-center">
                    <div className="flex items-center justify-center bg-[#38bdf8] text-white rounded-full h-8 w-8 mr-2">
                        <span className="text-sm font-bold">{userName.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <span className="font-semibold text-lg">{userName}</span>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <Link href="#" className="text-[#38bdf8] hover:text-[#7dd3fc] transition-colors">
                        Home
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                        About Me
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                        Education
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        className="text-gray-300 hover:text-white transition-colors"
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            <LogOut className="mr-2" size={16} />
                            Logout
                        </button>
                    ) : (
                        <Link href="/app/auth/login/login" className="bg-[#38bdf8] hover:bg-[#0284c7] text-white px-4 py-2 rounded-md transition-colors">
                            Contactar
                        </Link>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-xl">
                    <div className="inline-block px-3 py-1 text-sm font-medium text-[#38bdf8] bg-[#0f172a] border border-[#1e293b] rounded-full mb-4">
                        Software Engineer (FullStack)
                    </div>

                    <h1 className="text-5xl font-bold mb-4">
                        Hi, I'm <span className="text-[#38bdf8]">{userName}</span>
                    </h1>

                    <p className="text-gray-300 text-lg mb-8">
                        Full Stack Engineer with AI/ML and Embedded Systems.
                    </p>

                    <div className="flex space-x-4 mb-8">
                        <a
                            href="/Cover_Letter.pdf"
                            download
                            className="flex items-center bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                        >
                            Cover Letter
                            <ArrowRight className="ml-2" size={16} />
                        </a>

                        <Link
                            href="/New_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white bg-transparent border border-[#1e293b] px-6 py-3 rounded-md hover:bg-[#1e293b] transition-colors"
                            download
                        >
                            Download CV
                        </Link>

                    </div>

                    <div className="flex space-x-4">
                        <Link href="https://github.com/ajay2051" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={22} />
                        </Link>
                        <Link href="https://linkedin.com/in/ajay2051/" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={22} />
                        </Link>
                        <Link href="mailto:ajaythk.94@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={22} />
                        </Link>
                    </div>
                </div>

                <div className="mt-12 md:mt-0">
                    <div className="relative h-64 w-64 md:h-80 md:w-80 bg-gray-200 rounded-full overflow-hidden">
                        <Image
                            src="/ll.png"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </main>

            {/* Background code bracket decorations */}
            <div className="fixed left-4 bottom-1/4 text-[#1e293b] text-9xl opacity-50">
                {"<"}
            </div>
            <div className="fixed right-4 bottom-1/4 text-[#1e293b] text-9xl opacity-50">
                {">"}
            </div>
        </div>
    )
}