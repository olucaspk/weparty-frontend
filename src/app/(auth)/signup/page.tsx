import { UserRegisterForm } from '@/components/user-register-form'
import Link from 'next/link'

export default function SignUp() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-semibold tracking-tight">WeParty</h1>
        <p className="text-sm text-muted-foreground">
          Crie sua conta para acessar a Dashboard
        </p>
      </div>

      <div className="mt-4 w-96">
        <UserRegisterForm />
      </div>

      <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/signin"
          className="hover:text-brand underline underline-offset-4"
        >
          Já tem uma conta? Faça o Login
        </Link>
      </p>
    </main>
  )
}
