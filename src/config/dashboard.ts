interface MainNavItem {
  title: string
  href: string
  disabled?: boolean
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/dashboard',
    },
    {
      title: 'Festas',
      href: '/dashboard/parties',
    },
  ],
}
