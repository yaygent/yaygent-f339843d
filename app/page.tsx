"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const randomQuotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Life is what happens to you while you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is during our darkest moments that we must focus to see the light.",
  "The only impossible journey is the one you never begin.",
  "In the middle of difficulty lies opportunity.",
  "Believe you can and you're halfway there.",
  "The way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
]

export default function Home() {
  const [greetingCount, setGreetingCount] = useState(0)
  const [randomQuote, setRandomQuote] = useState(randomQuotes[0])
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleGreet = () => {
    setGreetingCount((prev) => prev + 1)
  }

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length)
    setRandomQuote(randomQuotes[randomIndex])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFormSubmitted(false)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 500))
    
    setFormSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "" })
  }

  const handleResetForm = () => {
    setFormData({ name: "", email: "" })
    setFormSubmitted(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-background to-muted/20">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Hello!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Welcome to yaygent-f339843d
          </p>
        </div>
        
        <div className="border rounded-lg p-8 space-y-6 bg-card shadow-lg">
          <div className="space-y-2">
            <p className="text-lg">This is a Next.js project with TypeScript.</p>
            <p className="text-muted-foreground">Ready for shadcn/ui integration.</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="flex gap-4 flex-wrap justify-center">
              <Button onClick={handleGreet}>Say Hello</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
            
            {greetingCount > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                You&apos;ve greeted {greetingCount} time{greetingCount !== 1 ? 's' : ''}!
              </p>
            )}
          </div>
        </div>

        <div className="border rounded-lg p-8 space-y-6 bg-card shadow-lg mt-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Random Quote Generator</h2>
            <div className="bg-muted/50 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
              <p className="text-lg text-center italic text-foreground/90">
                {`"${randomQuote}"`}
              </p>
            </div>
            <div className="flex justify-center">
              <Button onClick={handleRandomQuote} variant="secondary">
                Get Random Quote
              </Button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8 space-y-6 bg-card shadow-lg mt-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Contact Form</h2>
            
            {formSubmitted ? (
              <div className="bg-muted/50 rounded-lg p-6 min-h-[120px] flex flex-col items-center justify-center space-y-4">
                <p className="text-lg text-center text-foreground/90">
                  Thank you for your submission!
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  Your form has been submitted successfully.
                </p>
                <Button onClick={handleResetForm} variant="secondary">
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="flex justify-center pt-2">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
