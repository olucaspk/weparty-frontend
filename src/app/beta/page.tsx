import BetaOnly from '@/components/beta-only'

export const metadata = {
  title: 'Beta Only',
}

export default function Beta() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-40">
      <BetaOnly />
    </div>
  )
}
