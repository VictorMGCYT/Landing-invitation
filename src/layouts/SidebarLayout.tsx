import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { MenuIcon } from "lucide-react"
import { useRef, useState } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
    // const [open, setOpen] = useState(false);
    const refTriger = useRef<HTMLButtonElement>(null);

    function handleOpen() {
        refTriger.current?.click();
    }

    return (
        <SidebarProvider defaultOpen={false}>
        <AppSidebar />
            <SidebarTrigger ref={refTriger} className="hidden"/>
            <MenuIcon 
                onClick={handleOpen}
                size={35} 
                className="fixed top-0 left-0 z-10 bg-white m-2 p-1 rounded-lg md:hidden"/>
            <main className="relative w-full z-0">
                {children}
            </main>
        </SidebarProvider>
    )
}