"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/navigation"
import { AlertCircle, Loader2, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

// Define TypeScript interfaces for our login data
interface LoginCredentials {
    email: string
    password: string
    rememberMe: boolean
}

interface LoginResponse {
    token: string
    user: {
        id: string
        name: string
        email: string
        role: string
    }
}

export default function LoginPage() {
    const router = useRouter()
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: "",
        password: "",
        rememberMe: false,
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Check for dark mode preference
    useEffect(() => {
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
        setIsDarkMode(darkModeQuery.matches)

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches)
        }

        darkModeQuery.addEventListener("change", handleChange)
        return () => darkModeQuery.removeEventListener("change", handleChange)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setCredentials({
            ...credentials,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const handleRememberMeChange = (checked: boolean) => {
        setCredentials({
            ...credentials,
            rememberMe: checked,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // Make API call using axios
            const response = await axios.post<LoginResponse>(
                "/api/auth/login", // Replace with your actual API endpoint
                credentials,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )

            // Handle successful login
            console.log("Login successful:", response.data)

            // Store the token in localStorage or cookies
            localStorage.setItem("token", response.data.token)

            // Redirect to dashboard or home page
            router.push("/")
        } catch (err) {
            // Handle errors
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Login failed. Please check your credentials.")
                console.error("Login error:", err.response?.data)
            } else {
                setError("An unexpected error occurred")
                console.error("Unexpected error:", err)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            style={{ background: "var(--background)" }}
        >
            <Card
                className="w-full max-w-md mx-auto shadow-lg border border-zinc-800"
                style={{
                    background: isDarkMode ? "#111111" : "#ffffff",
                    color: "var(--foreground)",
                }}
            >
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center">
                        <Image
                            className={`h-12 w-auto ${isDarkMode ? "invert" : ""}`}
                            src="/next.svg"
                            alt="Your Company Logo"
                            width={120}
                            height={40}
                            priority
                        />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">Sign in to your account</CardTitle>
                    <CardDescription style={{ color: isDarkMode ? "#a1a1aa" : "#71717a" }}>
                        Or{" "}
                        <Link href="/register" className="font-medium hover:underline" style={{ color: "#3b82f6" }}>
                            create a new account
                        </Link>
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {error && (
                        <Alert
                            variant="destructive"
                            className="mb-6"
                            style={{
                                background: isDarkMode ? "#450a0a" : "#fee2e2",
                                color: isDarkMode ? "#fecaca" : "#b91c1c",
                                border: isDarkMode ? "1px solid #7f1d1d" : "1px solid #fca5a5",
                            }}
                        >
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium leading-none"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    Email address
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="name@example.com"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    className="w-full"
                                    style={{
                                        background: isDarkMode ? "#1a1a1a" : "#ffffff",
                                        color: "var(--foreground)",
                                        borderColor: isDarkMode ? "#333333" : "#e5e5e5",
                                    }}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium leading-none"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        Password
                                    </label>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm font-medium hover:underline"
                                        style={{ color: "#3b82f6" }}
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="••••••••"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    className="w-full"
                                    style={{
                                        background: isDarkMode ? "#1a1a1a" : "#ffffff",
                                        color: "var(--foreground)",
                                        borderColor: isDarkMode ? "#333333" : "#e5e5e5",
                                    }}
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="rememberMe"
                                    checked={credentials.rememberMe}
                                    onCheckedChange={handleRememberMeChange}
                                    style={{
                                        borderColor: isDarkMode ? "#333333" : "#e5e5e5",
                                        background: credentials.rememberMe ? "#3b82f6" : isDarkMode ? "#1a1a1a" : "#ffffff",
                                    }}
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="text-sm font-medium leading-none"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full"
                            style={{
                                background: "#3b82f6",
                                color: "white",
                                opacity: isLoading ? 0.7 : 1,
                            }}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <Lock className="mr-2 h-4 w-4" />
                                    Sign in
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator className="w-full" style={{ background: isDarkMode ? "#333333" : "#e5e5e5" }} />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                <span
                    style={{
                        background: isDarkMode ? "#111111" : "#ffffff",
                        color: isDarkMode ? "#a1a1aa" : "#71717a",
                        padding: "0 0.5rem",
                    }}
                >
                  Or continue with
                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button
                                variant="outline"
                                className="w-full"
                                type="button"
                                style={{
                                    background: "transparent",
                                    borderColor: isDarkMode ? "#333333" : "#e5e5e5",
                                    color: "var(--foreground)",
                                }}
                            >
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                                Sign in with Google
                            </Button>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-center">
                    <p className="text-xs" style={{ color: isDarkMode ? "#a1a1aa" : "#71717a" }}>
                        By signing in, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                            style={{ color: "#3b82f6" }}
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                            style={{ color: "#3b82f6" }}
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
