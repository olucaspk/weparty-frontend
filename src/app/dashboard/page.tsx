import { getCurrentUser } from '@/lib/session'

export default async function Dashboard() {
  const user = await getCurrentUser()

  console.log('USER IN DASHBOARD', user)

  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
    </main>
  )
}
