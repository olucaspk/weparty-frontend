import { DashboardHeader } from '../dashboard-header'
import { Button } from '../ui/button'
import { Icons } from '../ui/icons'
import { Skeleton } from '../ui/skeleton'

export function PartyPreviewSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <DashboardHeader heading="Festas" text="Crie e gerêncie suas festas" />
        <Button>
          <Icons.add className="mr-2 h-4 w-4" />
          Nova festa
        </Button>
      </header>

      <main className="ml-2 flex flex-col gap-2">
        {new Array(3).fill(0).map((_, i) => (
          <div
            key={i}
            className="flex w-full cursor-pointer flex-col items-center gap-2 rounded-lg border bg-card px-4 py-4 text-card-foreground shadow-sm"
          >
            <div className="w-full">
              <Skeleton className="h-5 w-2/5" />
            </div>

            <div className="flex w-full items-center gap-2">
              <Skeleton className="h-6 w-1/5" />
              <Skeleton className="h-6 w-1/5" />
              <Skeleton className="h-6 w-1/5" />
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
