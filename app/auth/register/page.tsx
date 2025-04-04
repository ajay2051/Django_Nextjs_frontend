"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
// import { useRouter } from "next/navigation"
import { AlertCircle, Loader2, UserPlus, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface RegisterData {
    first_name: string
    last_name: string
    email: string
    phone_number: string
    address: string
    password: string
}

export default function RegisterPage() {
    // const router = useRouter()
    const [formData, setFormData] = useState<RegisterData>({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        password: "",
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/create_users/`,
                formData, {
                headers: { "Content-Type": "application/json" },
            })

            // Set the success message from the API response
            setSuccessMessage(response.data.message)

            // Optional: Redirect after a delay or wait for user action
            // setTimeout(() => {
            //     router.push("/auth/login")
            // }, 3000)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Registration failed.")
            } else {
                setError("An unexpected error occurred")
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <Card className="w-full max-w-md mx-auto shadow-lg border border-border">
                <CardHeader className="text-center">
                    <div className="flex justify-center">
                        <Image src="/my_logo.png" alt="Logo" width={120} height={40} priority />
                    </div>
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Already have an account? <Link href="/auth/login" className="text-primary hover:underline">Sign in</Link>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {successMessage && (
                        <Alert variant="default" className="mb-6 bg-green-50">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <AlertDescription className="text-green-700">
                                {successMessage}
                            </AlertDescription>
                        </Alert>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
                        <Input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
                        <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <Input name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
                        <Input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                        <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <Button type="submit" disabled={isLoading} className="w-full bg-primary text-white">
                            {isLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Registering...</>
                            ) : (
                                <><UserPlus className="mr-2 h-4 w-4" /> Register</>
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="text-xs text-center">
                    By registering, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </CardFooter>
            </Card>
        </div>
    )
}