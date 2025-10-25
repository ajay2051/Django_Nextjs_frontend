"use client"

import { useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {ArrowRight, Github, Linkedin, Mail, Moon, Sun, LogOut, Code, Users, Globe, Calendar, Briefcase, GraduationCap, Send} from "lucide-react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'

export interface ThemeState {
    isDarkMode: boolean;
}

export interface RootState {
    theme: ThemeState;
}

export default function PortfolioPage() {
    const [userName] = useState("Ajay Thakur")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)




    // Check if user is logged in and get user info
    // useEffect(() => {
    //     const token = localStorage.getItem("access_token")
    //     if (token) {
    //         setIsLoggedIn(true)
    //         // Try to get user info from localStorage if available
    //         const userInfo = localStorage.getItem("userInfo")
    //         if (userInfo) {
    //             try {
    //                 const parsedUserInfo = JSON.parse(userInfo)
    //                 setUserName(parsedUserInfo.name || "Ajay Thakur")
    //             } catch (error) {
    //                 console.error("Error parsing user info:", error)
    //             }
    //         }
    //     } else {
    //         // Redirect to login if not logged in
    //         router.push("/auth/login")
    //     }
    // }, [router])

    // Toggle dark/light mode
    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("userInfo")
        setIsLoggedIn(false)
        router.push("/auth/login")
    }

    const themeStyles = {
        mainBg: isDarkMode ? 'bg-[#0f172a]' : 'bg-white',
        primaryBg: isDarkMode ? 'bg-[#0f172a]' : 'bg-white',
        text: isDarkMode ? 'text-white' : 'text-gray-900',
        cardBg: isDarkMode ? 'bg-[#1e293b]/50' : 'bg-white',
        border: isDarkMode ? 'border-[#334155]' : 'border-gray-200',
        secondaryBg: isDarkMode ? 'bg-[#0f172a]/70' : 'bg-gray-50',
        buttonText: isDarkMode ? 'text-white' : 'text-gray-900',
        navLinkDefault: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        navLinkHover: isDarkMode ? 'hover:text-white' : 'hover:text-gray-900',
        accentText: isDarkMode ? 'text-[#38bdf8]' : 'text-blue-600',
        accentBg: isDarkMode ? 'bg-[#38bdf8]' : 'bg-white-600',
        tagBg: isDarkMode ? 'bg-[#0f172a]' : 'bg-gray-50',
        timelineBg: isDarkMode ? 'bg-[#1e293b]' : 'bg-gray-200',
        timelineDotBg: isDarkMode ? 'bg-[#1e293b]' : 'bg-gray-100',
        buttonBg: isDarkMode ? 'bg-[#1e293b]' : 'bg-blue-600',
        buttonHoverBg: isDarkMode ? 'bg-[#334155]' : 'bg-blue-700',
        iconBg: isDarkMode ? 'bg-[#1e293b]' : 'bg-gray-200',
        timelineLine: isDarkMode ? 'bg-[#1e293b]' : 'bg-gray-200',
        skillTabBg: isDarkMode ? 'bg-[#1e293b]' : 'bg-gray-200',
        inputBg: isDarkMode ? 'bg-[#0f172a]' : 'bg-white',
        skillTabActive: isDarkMode ? 'data-[state=active]:bg-[#0f172a]' : 'data-[state=active]:bg-white',
        skillItemBg: isDarkMode ? 'bg-[#1e293b]/50' : 'bg-white',
        accentGradient: isDarkMode ? 'from-[#38bdf8] to-[#0ea5e9]' : 'from-blue-500 to-blue-600',
    }

    return (
        <div className={`min-h-screen bg-[#0f172a] text-white`}>
            {/* Navigation */}
                <nav className={`flex items-center justify-between px-4 py-4 lg:px-10 ${themeStyles.secondaryBg}`}>
                    <div className="flex items-center">
                        <div className={`flex items-center justify-center ${themeStyles.accentBg} text-white rounded-full h-8 w-8 mr-2`}>
                            <span className={`text-sm font-bold ${themeStyles.navLinkDefault} ${themeStyles.navLinkHover}`}>{userName.substring(0, 2).toUpperCase()}</span>
                        </div>
                        <span className={`font-semibold text-lg ${themeStyles.navLinkDefault}`}>{userName}</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="#" className={`${themeStyles.accentText} transition-colors`}>
                            Home
                        </Link>
                        <Link href="#about" className={`${themeStyles.navLinkDefault} ${themeStyles.navLinkHover} transition-colors`}>
                            About Me
                        </Link>
                        <Link href="#experience" className={`${themeStyles.navLinkDefault} ${themeStyles.navLinkHover} transition-colors`}>
                            Experience
                        </Link>
                        <Link href="#projects" className={`${themeStyles.navLinkDefault} ${themeStyles.navLinkHover} transition-colors`}>
                            Projects
                        </Link>
                        <Link href="#education" className={`${themeStyles.navLinkDefault} ${themeStyles.navLinkHover} transition-colors`}>
                            Education
                        </Link>
                        <Link href="#contact" className={`${themeStyles.navLinkDefault} ${themeStyles.navLinkHover} transition-colors`}>
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            className={`${themeStyles.navLinkDefault} ${themeStyles.navLinkHover} transition-colors`}
                            onClick={handleToggleTheme}
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
                            <Link href="/auth/login" className={`${themeStyles.accentBg} hover:opacity-90 text-white px-4 py-2 rounded-md transition-colors`}>
                                Login
                            </Link>
                        )}
                    </div>
                </nav>

            {/* Main Content */}
                <main className={`container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between ${themeStyles.primaryBg}`}>
                    <div className="max-w-xl">
                        <div className={`inline-block px-3 py-1 text-sm font-medium ${themeStyles.accentText} ${isDarkMode ? 'bg-[#0f172a]' : 'bg-gray-100'} border ${themeStyles.border} rounded-full mb-4`}>
                            Software Engineer (FullStack)
                        </div>

                        <h1 className="text-5xl font-bold mb-4">
                            Hi, I&#39;m <span className={themeStyles.accentText}>{userName}</span>
                        </h1>

                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg mb-8`}>
                            Full Stack Engineer with AI/ML and Embedded Systems.
                        </p>

                        <div className="flex space-x-4 mb-8">
                            <a
                                href="/Cover_Letter.pdf"
                                download
                                className={`flex items-center bg-gradient-to-r ${themeStyles.accentGradient} text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity`}
                            >
                                Cover Letter
                                <ArrowRight className="ml-2" size={16} />
                            </a>

                            <Link
                                href="/New_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center text-white border ${themeStyles.border} px-6 py-3 rounded-md transition-colors ${isDarkMode ? 'bg-transparent hover:bg-[#1e293b]' : 'bg-blue-600 hover:bg-blue-700'}`}
                                download
                            >
                                Download CV
                            </Link>
                        </div>

                        <div className="flex space-x-4">
                            <Link href="https://github.com/ajay2051" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${themeStyles.navLinkHover} transition-colors`}>
                                <Github size={22} />
                            </Link>
                            <Link href="https://linkedin.com/in/ajay2051/" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${themeStyles.navLinkHover} transition-colors`}>
                                <Linkedin size={22} />
                            </Link>
                            <Link href="mailto:ajaythk.94@gmail.com" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${themeStyles.navLinkHover} transition-colors`}>
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

            {/* About Me Section */}
                <section id="about" className={`py-20 ${themeStyles.secondaryBg}`}>
                    <div className="container mx-auto px-4">
                        {/* About Me Header */}
                        <div className="text-center mb-16">
                            <h2 className={`text-sm ${themeStyles.accentText} mb-2`}>Who I Am</h2>
                            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>About Me</h1>
                            <p className={`max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Full Stack Engineer with expertise in AI/ML and Embedded Systems, passionate about creating innovative solutions.
                            </p>
                        </div>

                        {/* Two column layout for About Me content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Left column - My Story */}
                            <div>
                                <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>My Journey</h2>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                                    I&#39;m a Full Stack Engineer with a passion for building scalable web applications and exploring new technologies. My journey in software development began with a curiosity about how things work, which led me to pursue a career in engineering.
                                </p>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                                    Currently, I focus on developing full-stack applications with modern Python frameworks while continuing to expand my knowledge in AI/ML and embedded systems. I enjoy solving complex problems and collaborating with cross-functional teams.
                                </p>

                                {/* Key interests */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    <div className="flex items-center">
                                        <div className={`w-10 h-10 rounded-full ${themeStyles.iconBg} flex items-center justify-center mr-3`}>
                                            <Code className={`w-5 h-5 ${themeStyles.accentText}`} />
                                        </div>
                                        <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Python Development</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className={`w-10 h-10 rounded-full ${themeStyles.iconBg} flex items-center justify-center mr-3`}>
                                            <Users className={`w-5 h-5 ${themeStyles.accentText}`} />
                                        </div>
                                        <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>AI/ML</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className={`w-10 h-10 rounded-full ${themeStyles.iconBg} flex items-center justify-center mr-3`}>
                                            <Globe className={`w-5 h-5 ${themeStyles.accentText}`} />
                                        </div>
                                        <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Embedded Systems</span>
                                    </div>
                                </div>

                                {/* Stats section */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6`}>
                                        <h3 className={`text-3xl font-bold ${themeStyles.accentText}`}>5+</h3>
                                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Years of experience</p>
                                    </div>
                                    <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6`}>
                                        <h3 className={`text-3xl font-bold ${themeStyles.accentText}`}>10+</h3>
                                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Projects completed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right column - My Skills */}
                            <div>
                                <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>My Skills</h2>

                                {/* Skills tabs */}
                                <Tabs defaultValue="frontend" className="w-full">
                                    <TabsList className={`grid grid-cols-3 mb-8 ${themeStyles.skillTabBg}`}>
                                        <TabsTrigger
                                            value="frontend"
                                            className={`${themeStyles.skillTabActive} ${isDarkMode ? 'data-[state=active]:text-white' : 'data-[state=active]:text-gray-900'}`}
                                        >
                                            Frontend
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="backend"
                                            className={`${themeStyles.skillTabActive} ${isDarkMode ? 'data-[state=active]:text-white' : 'data-[state=active]:text-gray-900'}`}
                                        >
                                            Backend
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="other"
                                            className={`${themeStyles.skillTabActive} ${isDarkMode ? 'data-[state=active]:text-white' : 'data-[state=active]:text-gray-900'}`}
                                        >
                                            Other
                                        </TabsTrigger>
                                    </TabsList>

                                    {/* Frontend skills */}
                                    <TabsContent value="frontend" className="mt-0">
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Skill items - repeating for all tabs */}
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>React.js</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Next.js</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>TypeScript</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Tailwind CSS</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Material UI</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Redux</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    {/* Backend skills */}
                                    <TabsContent value="backend" className="mt-0">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Python</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Django</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>FastAPI</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>PostgreSQL</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Computer Vision</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>DeepLearning</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    {/* Other skills */}
                                    <TabsContent value="other" className="mt-0">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>TensorFlow</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Docker</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Kubernetes</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Git/GitHub</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>AWS</span>
                                                </div>
                                            </div>
                                            <div className={`${themeStyles.skillItemBg} border ${themeStyles.border} rounded-lg p-4`}>
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 ${themeStyles.accentBg} rounded-full mr-2`}></div>
                                                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Embedded System</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>

            <section id="experience" className={`py-20 ${themeStyles.primaryBg}`}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className={`text-sm ${themeStyles.accentText} mb-2`}>Work History</h2>
                        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>My Experience</h1>
                        <p className={`max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Professional experience and career milestones throughout my journey as a developer.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Timeline Item 1 */}
                        <div className="flex mb-12 relative">
                            {/* Timeline line */}
                            <div className={`absolute top-0 bottom-0 left-8 w-0.5 ${themeStyles.timelineBg} z-0`}></div>

                            {/* Timeline dot */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 ${themeStyles.timelineDotBg} rounded-full flex items-center justify-center mr-6`}>
                                    <Briefcase size={24} className={themeStyles.accentText} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6 flex-1`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Senior Full Stack Developer</h3>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <Calendar size={16} className={themeStyles.accentText + " mr-2"} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023 - Present</span>
                                    </div>
                                </div>
                                <h4 className={`${themeStyles.accentText} mb-4`}>Techabound Pvt Ltd</h4>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                    Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions using Django, Next.js, and cloud technologies.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Next.js</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Django</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>AWS</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>PostgreSQL</span>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="flex mb-12 relative">
                            {/* Timeline line */}
                            <div className={`absolute top-0 bottom-0 left-8 w-0.5 ${themeStyles.timelineBg} z-0`}></div>

                            {/* Timeline dot */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 ${themeStyles.timelineDotBg} rounded-full flex items-center justify-center mr-6`}>
                                    <Briefcase size={24} className={themeStyles.accentText} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6 flex-1`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Software Engineer</h3>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <Calendar size={16} className={themeStyles.accentText + " mr-2"} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2021 - 2023</span>
                                    </div>
                                </div>
                                <h4 className={themeStyles.accentText + " mb-4"}>NavyaAdvisors Pvt Ltd.</h4>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                    Developed and maintained multiple web applications, implemented CI/CD pipelines, and collaborated with cross-functional teams to deliver high-quality software solutions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>TypeScript</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Python</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Django</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Docker</span>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="flex relative">
                            {/* Timeline dot */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 ${themeStyles.timelineDotBg} rounded-full flex items-center justify-center mr-6`}>
                                    <Briefcase size={24} className={themeStyles.accentText} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6 flex-1`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Junior Web Developer</h3>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <Calendar size={16} className={themeStyles.accentText + " mr-2"} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2020 - 2021</span>
                                    </div>
                                </div>
                                <h4 className={themeStyles.accentText + " mb-4"}>Thakur International Pvt Ltd.</h4>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                    Built responsive websites, fixed bugs in existing systems, and assisted in the development of new features for client projects.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>JavaScript</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>HTML/CSS</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Django</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 ${themeStyles.secondaryBg}`}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className={`text-sm ${themeStyles.accentText} mb-2`}>Projects</h2>
                        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>My Recent Work</h1>
                        <p className={`max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Here is a selection of projects I have worked on recently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project Card 1 */}
                        <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg overflow-hidden transition-transform hover:transform hover:-translate-y-2`}>
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/vr.png"
                                    alt="E-commerce App"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Vehicle Rent</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                    A vehicle rent platform with a dashboard and payment gateway.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Next.js</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>FastAPI</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>PostgreSQL</span>
                                </div>
                                <div className="flex justify-between">
                                    <Link
                                        href="https://demo-rental.techabound.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${themeStyles.accentText} hover:text-[#7dd3fc] flex items-center`}
                                    >
                                        <Globe size={16} className="mr-2" />
                                        Demo
                                    </Link>
                                    <Link
                                        href="https://github.com/ajay2051"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${themeStyles.accentText} hover:text-[#7dd3fc] flex items-center`}
                                    >
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg overflow-hidden transition-transform hover:transform hover:-translate-y-2`}>
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/f1.png"
                                    alt="Task Manager"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">F1 Apply</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                    Easy Apply to different US Universities from single platform with payment gateway.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Next.js</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Django</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>PostgreSQL</span>
                                </div>
                                <div className="flex justify-between">
                                    <Link href="https://f1apply-frontend.vercel.app/" target="_blank" className={`${themeStyles.accentText} hover:text-[#7dd3fc] flex items-center`}>
                                        <Globe size={16} className="mr-2" />
                                        Demo
                                    </Link>
                                    <Link href="https://github.com/ajay2051" target="_blank" className={`${themeStyles.accentText} hover:text-[#7dd3fc] flex items-center`}>
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg overflow-hidden transition-transform hover:transform hover:-translate-y-2`}>
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src="/weather.png"
                                    alt="Weather App"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Weather App</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                    Application that displays current weather and forecast using an external API.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>React</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>API REST</span>
                                    <span className={`px-3 py-1 text-xs ${themeStyles.tagBg} border ${themeStyles.border} ${isDarkMode ? 'text-white' : 'text-gray-600'} rounded-full`}>Tailwind CSS</span>
                                </div>
                                <div className="flex justify-between">
                                    <Link href="https://www.ventusky.com/" target="_blank" className={`${themeStyles.accentText} hover:text-[#7dd3fc] flex items-center`}>
                                        <Globe size={16} className="mr-2" />
                                        Demo
                                    </Link>
                                    <Link href="https://github.com/ajay2051" target="_blank" className={`${themeStyles.accentText} hover:text-[#7dd3fc] flex items-center`}>
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link
                            href="https://github.com/ajay2051?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${themeStyles.buttonBg} hover:${themeStyles.buttonHoverBg} text-white px-6 py-3 rounded-md transition-colors flex items-center`}
                        >
                            View More Projects
                            <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className={`py-20 ${themeStyles.primaryBg}`}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className={`text-sm ${themeStyles.accentText} mb-2`}>Education</h2>
                        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>My Academic Training</h1>
                        <p className={`max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            My Educational Background And Professional Training.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Timeline Item 1 */}
                        <div className="flex mb-12 relative">
                            {/* Timeline line */}
                            <div className={`absolute top-0 bottom-0 left-8 w-0.5 ${themeStyles.timelineBg} z-0`}></div>

                            {/* Timeline dot */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 ${themeStyles.timelineDotBg} rounded-full flex items-center justify-center mr-6`}>
                                    <GraduationCap size={24} className={themeStyles.accentText} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6 flex-1`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Degree in Information Technology</h3>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <Calendar size={16} className={themeStyles.accentText + " mr-2"} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2015 - 2019</span>
                                    </div>
                                </div>
                                <h4 className={themeStyles.accentText + " mb-4"}>Visvesvaraya Technological University (VTU)</h4>
                                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                                    Studies focused on software development.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="flex mb-12 relative">
                            {/* Timeline line */}
                            <div className={`absolute top-0 bottom-0 left-8 w-0.5 ${themeStyles.timelineBg} z-0`}></div>

                            {/* Timeline dot */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 ${themeStyles.timelineDotBg} rounded-full flex items-center justify-center mr-6`}>
                                    <GraduationCap size={24} className={themeStyles.accentText} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6 flex-1`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Deep Learning</h3>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <Calendar size={16} className={themeStyles.accentText + " mr-2"} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2019 - 2020</span>
                                    </div>
                                </div>
                                <h4 className={themeStyles.accentText + " mb-4"}>Deep Learning Academy</h4>
                                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                                    Intensive Training in Deep Learning Neural Networks and Convolutional Neural Network.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="flex relative">
                            {/* Timeline dot */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 ${themeStyles.timelineDotBg} rounded-full flex items-center justify-center mr-6`}>
                                    <GraduationCap size={24} className={themeStyles.accentText} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-6 flex-1`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Embedded Systems</h3>
                                    <div className="flex items-center mt-2 md:mt-0">
                                        <Calendar size={16} className={themeStyles.accentText + " mr-2"} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023 - Present</span>
                                    </div>
                                </div>
                                <h4 className={themeStyles.accentText + " mb-4"}>Online Platform</h4>
                                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                                    Learning to develop smart devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 ${themeStyles.secondaryBg}`}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className={`text-sm ${themeStyles.accentText} mb-2`}>Contact</h2>
                        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Talk later?</h1>
                        <p className={`max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Interested in working together or have any questions?
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Contact Info */}
                        <div className="bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] p-8 md:p-12 rounded-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <p className="text-white mb-8">
                                Fill out the form and I&#39;ll get back to you as soon as possible.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                                        <Mail size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white">ajaythk.94@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                                        <Github size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white">github.com/ajay2051</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                                        <Linkedin size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white">linkedin.com/in/ajay2051/</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className={`${themeStyles.cardBg} border ${themeStyles.border} rounded-lg p-8 md:p-12`}>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className={`w-full px-4 py-3 ${themeStyles.inputBg} border ${themeStyles.border} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]`}
                                            placeholder="Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className={`w-full px-4 py-3 ${themeStyles.inputBg} border ${themeStyles.border} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]`}
                                            placeholder="ajay@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className={`w-full px-4 py-3 ${themeStyles.inputBg} border ${themeStyles.border} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]`}
                                        placeholder="Subject of the message"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Message</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className={`w-full px-4 py-3 ${themeStyles.inputBg} border ${themeStyles.border} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]`}
                                        placeholder="Your Message..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                                >
                                    Send Message
                                    <Send size={16} className="ml-2" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className={`py-8 ${themeStyles.mainBg} border-t ${themeStyles.border}`}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className={`flex items-center justify-center ${themeStyles.accentBg} text-white rounded-full h-8 w-8 mr-2`}>
                                <span className={`text-sm font-bold ${themeStyles.navLinkDefault} ${themeStyles.navLinkHover}`}>{userName.substring(0, 2).toUpperCase()}</span>
                            </div>
                            <span className={`font-semibold text-lg ${themeStyles.navLinkDefault}`}>{userName}</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link href="https://github.com/ajay2051" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${themeStyles.navLinkHover} transition-colors`}>
                                <Github size={20} />
                            </Link>
                            <Link href="https://linkedin.com/in/ajay2051/" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${themeStyles.navLinkHover} transition-colors`}>
                                <Linkedin size={20} />
                            </Link>
                            <Link href="mailto:ajaythk.94@gmail.com" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${themeStyles.navLinkHover} transition-colors`}>
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                            © {new Date().getFullYear()} {userName}. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Background code bracket decorations */}
            <div className={`fixed left-4 bottom-1/4 ${isDarkMode ? 'text-[#1e293b]' : 'text-gray-200'} text-9xl opacity-50`}>
                {"<"}
            </div>
            <div className={`fixed right-4 bottom-1/4 ${isDarkMode ? 'text-[#1e293b]' : 'text-gray-200'} text-9xl opacity-50`}>
                {">"}
            </div>
        </div>
    )
}