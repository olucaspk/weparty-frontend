import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-semibold tracking-tight">WeParty</h1>
        <p className="text-sm text-muted-foreground">Entre com sua conta</p>
      </div>

      <div className="w-96 mt-4">
        <UserAuthForm />
      </div>
    </main>
  )
}
