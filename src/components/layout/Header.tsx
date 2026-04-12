
import React from 'react';
import { Search, Bell, User, Database } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOCK_CONTEXTS } from '@/lib/mock-data';

interface HeaderProps {
  currentContext: string;
  setContext: (context: string) => void;
}

export function Header({ currentContext, setContext }: HeaderProps) {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-6 flex-1">
        <div className="flex items-center gap-2 min-w-[200px]">
          <Database className="w-4 h-4 text-zinc-500" />
          <Select value={currentContext} onValueChange={setContext}>
            <SelectTrigger className="w-[180px] bg-transparent border-zinc-800 text-zinc-300 h-9">
              <SelectValue placeholder="Select Context" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
              {MOCK_CONTEXTS.map(ctx => (
                <SelectItem key={ctx.id} value={ctx.id}>{ctx.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <Input 
            placeholder="Search resources..." 
            className="pl-10 bg-zinc-900/50 border-zinc-800 text-zinc-300 h-9 focus-visible:ring-blue-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-200">
          <Bell className="w-4 h-4" />
        </Button>
        <div className="h-8 w-[1px] bg-zinc-800 mx-2" />
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-zinc-200">Admin User</p>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Superuser</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-zinc-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
