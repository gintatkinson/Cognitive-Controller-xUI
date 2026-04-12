
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
import { MoreHorizontal, Plus, Server } from 'lucide-react';
import { MOCK_DEVICES } from '@/lib/mock-data';

interface DevicesViewProps {
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
}

export function DevicesView({ onNavigate }: DevicesViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Devices</h2>
          <p className="text-zinc-500 text-sm">Manage network elements and their configurations</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Device
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
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Drivers</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Endpoints</TableHead>
              <TableHead className="text-right text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_DEVICES.map((device) => (
              <TableRow 
                key={device.id} 
                className="border-zinc-800 hover:bg-zinc-900/30 transition-colors group cursor-pointer"
                onClick={() => onNavigate(device.id, 'device')}
              >
                <TableCell className="font-mono text-xs text-zinc-500">{device.id}</TableCell>
                <TableCell className="font-medium text-zinc-200">
                  <div className="flex items-center gap-2">
                    <Server className="w-3 h-3 text-zinc-500" />
                    {device.name}
                  </div>
                </TableCell>
                <TableCell className="text-zinc-400 text-xs">{device.type}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={
                      device.status === 'OPERATIONAL' 
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                        : "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
                    }
                  >
                    {device.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {device.drivers.map(driver => (
                      <Badge key={driver} variant="secondary" className="bg-zinc-900 text-zinc-400 border-zinc-800 text-[10px] px-1.5 py-0">
                        {driver}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-zinc-500 text-xs">{device.endpoints.length} ports</TableCell>
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
