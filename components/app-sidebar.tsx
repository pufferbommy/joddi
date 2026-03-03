"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { WalletIcon, PieChartIcon, ReceiptIcon, TrendingUpIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, PiggyBankIcon, TargetIcon } from "lucide-react"
import Link from "next/link"

const data = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: (
        <WalletIcon />
      ),
    },
    {
      title: "Expenses",
      url: "#",
      icon: (
        <ReceiptIcon />
      ),
    },
    {
      title: "Budget",
      url: "#",
      icon: (
        <PiggyBankIcon />
      ),
    },
    {
      title: "Reports",
      url: "#",
      icon: (
        <PieChartIcon />
      ),
    },
    {
      title: "Goals",
      url: "#",
      icon: (
        <TargetIcon />
      ),
    },
  ],
  navClouds: [
    {
      title: "This Month",
      icon: (
        <TrendingUpIcon />
      ),
      isActive: true,
      url: "#",
      items: [
        {
          title: "All Expenses",
          url: "#",
        },
        {
          title: "By Category",
          url: "#",
        },
      ],
    },
    {
      title: "Categories",
      icon: (
        <PieChartIcon />
      ),
      url: "#",
      items: [
        {
          title: "Food",
          url: "#",
        },
        {
          title: "Housing",
          url: "#",
        },
        {
          title: "Transportation",
          url: "#",
        },
        {
          title: "Utilities",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon />
      ),
    },
    {
      title: "Get Help",
      url: "#",
      icon: (
        <CircleHelpIcon />
      ),
    },
    {
      title: "Search",
      url: "#",
      icon: (
        <SearchIcon />
      ),
    },
  ],
  documents: [
    {
      name: "Export Data",
      url: "#",
      icon: (
        <DatabaseIcon />
      ),
    },
    {
      name: "Reports",
      url: "#",
      icon: (
        <PiggyBankIcon />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="/" />}
            >
              <WalletIcon className="size-5!" />
              <span className="text-base font-semibold">Joddi</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
