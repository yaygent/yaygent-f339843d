import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Welcome to yaygent-f339843d</h1>
        <p className="text-lg mb-8">Generated project: ss</p>
        <div className="border rounded-lg p-6 space-y-4">
          <p className="mb-4">This is a Next.js project with TypeScript.</p>
          <p>Ready for shadcn/ui integration.</p>
          <div className="flex gap-4 mt-6">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
