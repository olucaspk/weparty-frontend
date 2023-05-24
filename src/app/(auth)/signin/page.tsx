import { UserAuthForm } from '@/components/user-auth-form'
import Link from 'next/link'

export default function SignIn() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-semibold tracking-tight">WeParty</h1>
        <p className="text-sm text-muted-foreground">
          Entre com seu email para acessar sua conta
        </p>
      </div>

      <div className="mt-4 w-96">
        <UserAuthForm />
      </div>

      <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/signup"
          className="hover:text-brand underline underline-offset-4"
        >
          Ainda não tem uma conta? Registre-se
        </Link>
      </p>
    </main>
  )
}
