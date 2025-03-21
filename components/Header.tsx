// components/Header.js
"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sun, Moon, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [userName, setUserName] = useState("User");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            const userInfo = localStorage.getItem("userInfo");
            if (userInfo) {
                try {
                    const parsedUserInfo = JSON.parse(userInfo);
                    setUserName(parsedUserInfo.name || "User");
                } catch (error) {
                    console.error("Error parsing user info:", error);
                }
            }
        } else {
            router.push("/login");
        }
    }, [router]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        setIsLoggedIn(false);
        router.push("/login");
    };

    return (
        <nav className="flex items-center justify-between px-4 py-4 lg:px-10 bg-[#0f172a] text-white">
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-[#38bdf8] text-white rounded-full h-8 w-8 mr-2">
                    <span className="text-sm font-bold">{userName.substring(0, 2).toUpperCase()}</span>
                </div>
                <span className="font-semibold text-lg">{userName}</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-[#38bdf8] hover:text-[#7dd3fc] transition-colors">
                    Inicio
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    Sobre mí
                </Link>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                    Proyectos
                </Link>
                <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
                    Educación
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contacto
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={toggleDarkMode}
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                {isLoggedIn && (
                    <button
                        onClick={handleLogout}
                        className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        <LogOut className="mr-2" size={16} />
                        Salir
                    </button>
                )}
            </div>
        </nav>
    );
}