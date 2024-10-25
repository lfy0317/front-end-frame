"use client";

import * as React from "react";
import { Plus, CirclePlus, GalleryVerticalEnd, Search } from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
	SidebarFooter
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import "./ChatLayou.css";
import { Button } from "@/components/ui/button";

const data = {
	versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
	navMain: [
		{
			title: "Routing",
			url: "#"
		},
		{
			title: "Data Fetching",
			url: "#",
			isActive: true
		},
		{
			title: "Rendering1",
			url: "#"
		},
		{
			title: "Caching1",
			url: "#"
		},
		{
			title: "Rendering2",
			url: "#"
		},
		{
			title: "Caching2",
			url: "#"
		},
		{
			title: "Rendering3",
			url: "#"
		},
		{
			title: "Caching3",
			url: "#"
		},
		{
			title: "Rendering4",
			url: "#"
		},
		{
			title: "Caching4",
			url: "#"
		},
		{
			title: "Rendering5",
			url: "#"
		},
		{
			title: "Caching5",
			url: "#"
		}
	]
};

export default function ChatLayout() {
	const [selectedVersion, setSelectedVersion] = React.useState(data.versions[0]);

	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<GalleryVerticalEnd className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">Beyondata</span>
									<span className="">赋范空间</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
					<form>
						<SidebarGroup className="py-0">
							<SidebarGroupContent className="relative">
								<Button className="w-full justify-start">
									<Plus />
									新建对话
								</Button>
							</SidebarGroupContent>
						</SidebarGroup>
					</form>
				</SidebarHeader>
				<SidebarContent className="m-4 scroll-custom">
					{/* We create a SidebarGroup for each parent. */}
					<SidebarMenu>
						{data.navMain.map(item => (
							<SidebarMenuItem key={item.title} className="rounded-md hover:bg-slate-200">
								<SidebarMenuButton asChild isActive={item.isActive}>
									<a href={item.url}>{item.title}</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarContent>
				<SidebarRail />
				<SidebarFooter>
					<Button variant="ghost" className="flex items-center justify-between flex-row">
						知识库会话
						<CirclePlus />
					</Button>
					<Button variant="ghost" className="flex items-center justify-between flex-row">
						数据库会话
						<CirclePlus />
					</Button>
				</SidebarFooter>
			</Sidebar>
			<SidebarInset>
				<Outlet />
			</SidebarInset>
		</SidebarProvider>
	);
}
