import { DashboardHeader } from '@/components/dashboard-header'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { Button } from '@/components/ui/button'
import ButtonWithTooltip from '@/components/ui/button-with-tooltip'
import { Icons } from '@/components/ui/icons'

export default async function Parties() {
  await new Promise((resolve) => setTimeout(resolve, 2500))

  const PARTIES = 1

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <DashboardHeader heading="Festas" text="Crie e gerêncie suas festas" />
        <Button>
          <Icons.add className="mr-2 h-4 w-4" />
          Nova festa
        </Button>
      </header>

      <div className="ml-2 flex w-full flex-col items-center gap-2">
        {PARTIES > 0 ? (
          <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border bg-card px-4 py-4 text-card-foreground shadow-sm">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium">Lorem Ipsum</h1>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-md border border-input px-2 py-2">
                  <Icons.calendar className="h-4 w-4" />
                  <p className="text-xs">March 3rd 2023</p>
                </div>

                <div className="flex items-center gap-1 rounded-md border border-input px-2 py-2">
                  <Icons.mapPin className="h-4 w-4" />
                  <p className="text-xs">Avenida Farrapos, 69</p>
                </div>

                <div className="flex items-center gap-1 rounded-md border border-input px-2 py-2">
                  <Icons.ticket className="h-4 w-4" />
                  <p className="text-xs">30/45</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 !self-start">
              <ButtonWithTooltip
                text="Copiar convite da festa"
                size="sm"
                variant="outline"
              >
                <Icons.copy className="h-4 w-4" />
              </ButtonWithTooltip>
              <ButtonWithTooltip
                text="Visualizar página de convidados"
                size="sm"
                variant="outline"
              >
                <Icons.eye className="h-4 w-4" />
              </ButtonWithTooltip>
              <ButtonWithTooltip text="Editar" size="sm" variant="outline">
                <Icons.edit3 className="h-4 w-4" />
              </ButtonWithTooltip>
            </div>
          </div>
        ) : (
          <EmptyPlaceholder className="w-full">
            <EmptyPlaceholder.Icon name="partyPopper" />
            <EmptyPlaceholder.Title>Sem festas</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Você ainda não criou nenhuma festa, que tal começar agora?
            </EmptyPlaceholder.Description>
            <Button>
              <Icons.add className="mr-2 h-4 w-4" />
              Criar minha primeira festa
            </Button>
          </EmptyPlaceholder>
        )}
      </div>
    </div>
  )
}
