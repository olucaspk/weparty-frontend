'use client'

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

      <Button onClick={() => push('/')}>Voltar a página inicial</Button>
    </EmptyPlaceholder>
  )
}
