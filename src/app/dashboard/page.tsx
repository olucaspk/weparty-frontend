'use client'

import { EmptyPlaceholder } from '@/components/empty-placeholder'

export default function Dashboard() {
  return (
    <EmptyPlaceholder className="w-full">
      <EmptyPlaceholder.Icon name="warning" />
      <EmptyPlaceholder.Title>Em construção</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        Nem todas as funcionalidades estarão disponíveis no momento.
      </EmptyPlaceholder.Description>
    </EmptyPlaceholder>
  )
}
