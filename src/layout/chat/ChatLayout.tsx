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
			title: "Getting Started",
			url: "#",
			items: [
				{
					title: "Installation",
					url: "#"
				},
				{
					title: "Project Structure",
					url: "#"
				}
			]
		},
		{
			title: "Building Your Application",
			url: "#",
			items: [
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
					title: "Rendering",
					url: "#"
				},
				{
					title: "Caching",
					url: "#"
				},
				{
					title: "Styling",
					url: "#"
				},
				{
					title: "Optimizing",
					url: "#"
				},
				{
					title: "Configuring",
					url: "#"
				},
				{
					title: "Testing",
					url: "#"
				},
				{
					title: "Authentication",
					url: "#"
				},
				{
					title: "Deploying",
					url: "#"
				},
				{
					title: "Upgrading",
					url: "#"
				},
				{
					title: "Examples",
					url: "#"
				}
			]
		},
		{
			title: "API Reference",
			url: "#",
			items: [
				{
					title: "Components",
					url: "#"
				},
				{
					title: "File Conventions",
					url: "#"
				},
				{
					title: "Functions",
					url: "#"
				},
				{
					title: "next.config.js Options",
					url: "#"
				},
				{
					title: "CLI",
					url: "#"
				},
				{
					title: "Edge Runtime",
					url: "#"
				}
			]
		},
		{
			title: "Architecture",
			url: "#",
			items: [
				{
					title: "Accessibility",
					url: "#"
				},
				{
					title: "Fast Refresh",
					url: "#"
				},
				{
					title: "Next.js Compiler",
					url: "#"
				},
				{
					title: "Supported Browsers",
					url: "#"
				},
				{
					title: "Turbopack",
					url: "#"
				}
			]
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
				<SidebarContent>
					{/* We create a SidebarGroup for each parent. */}
					{data.navMain.map(item => (
						<SidebarGroup key={item.title}>
							<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									{item.items.map(item => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild isActive={item.isActive}>
												<a href={item.url}>{item.title}</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					))}
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
