
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Plus, Activity } from 'lucide-react';
import { MOCK_SERVICES } from '@/lib/mock-data';

interface ServicesViewProps {
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
}

export function ServicesView({ onNavigate }: ServicesViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Services</h2>
          <p className="text-zinc-500 text-sm">Provision and monitor connectivity services</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create Service
        </Button>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-900/50">
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">ID</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Name</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Type</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Status</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Endpoints</TableHead>
              <TableHead className="text-right text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_SERVICES.map((service) => (
              <TableRow 
                key={service.id} 
                className="border-zinc-800 hover:bg-zinc-900/30 transition-colors group cursor-pointer"
                onClick={() => onNavigate(service.id, 'service')}
              >
                <TableCell className="font-mono text-xs text-zinc-500">{service.id}</TableCell>
                <TableCell className="font-medium text-zinc-200">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-zinc-500" />
                    {service.name}
                  </div>
                </TableCell>
                <TableCell className="text-zinc-400 text-xs">{service.type}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={
                      service.status === 'ACTIVE' 
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                        : service.status === 'PENDING'
                        ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                        : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                    }
                  >
                    {service.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-zinc-500 text-xs">
                  <div className="flex flex-col gap-0.5">
                    {service.endpoints.map(ep => (
                      <span key={ep} className="font-mono text-[10px]">{ep}</span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
