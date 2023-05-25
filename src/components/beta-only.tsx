'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { EmptyPlaceholder } from './empty-placeholder'
import { Button } from './ui/button'

export default function BetaOnly() {
  const { push } = useRouter()

  return (
    <EmptyPlaceholder className="w-full">
      <EmptyPlaceholder.Icon name="warning" />
      <EmptyPlaceholder.Title>Sem permissão</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        Somente usuários beta podem acessar o dashboard.
      </EmptyPlaceholder.Description>

      <div className="flex items-center gap-2">
        <Button onClick={() => push('/')}>Voltar a página inicial</Button>
        <Button
          onClick={() =>
            signOut({
              callbackUrl: '/signin',
            })
          }
          variant="outline"
        >
          Desconectar-se
        </Button>
      </div>
    </EmptyPlaceholder>
  )
}
