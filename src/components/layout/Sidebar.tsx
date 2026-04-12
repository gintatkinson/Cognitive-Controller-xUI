
import React from 'react';
import { 
  LayoutDashboard, 
  Network, 
  Server, 
  Share2, 
  Layers, 
  Settings, 
  Activity,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'topology', label: 'Topology', icon: Network },
  { id: 'devices', label: 'Devices', icon: Server },
  { id: 'links', label: 'Links', icon: Share2 },
  { id: 'services', label: 'Services', icon: Activity },
  { id: 'slices', label: 'Slices', icon: Layers },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Network className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-zinc-100 tracking-tight">TFS Controller</h1>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">v3.0.0-beta</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="px-3 space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 px-3 py-2 h-10 text-sm font-medium transition-all",
                activeTab === item.id 
                  ? "bg-zinc-900 text-zinc-100 border-l-2 border-blue-600 rounded-none shadow-[inset_0_0_10px_rgba(37,99,235,0.1)]" 
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-blue-500" : "text-zinc-500")} />
              {item.label}
              {activeTab === item.id && <ChevronRight className="ml-auto w-3 h-3 text-zinc-600" />}
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-zinc-800">
        <Button variant="ghost" className="w-full justify-start gap-3 text-zinc-400 hover:text-zinc-200">
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>
    </div>
  );
}
