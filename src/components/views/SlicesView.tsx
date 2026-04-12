
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
import { MoreHorizontal, Layers, Plus } from 'lucide-react';
import { MOCK_SLICES } from '@/lib/mock-data';

interface SlicesViewProps {
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
}

export function SlicesView({ onNavigate }: SlicesViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Network Slices</h2>
          <p className="text-zinc-500 text-sm">Isolated network partitions for specific use cases</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create Slice
        </Button>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-900/50">
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">ID</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Name</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Status</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Services</TableHead>
              <TableHead className="text-right text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_SLICES.map((slice) => (
              <TableRow 
                key={slice.id} 
                className="border-zinc-800 hover:bg-zinc-900/30 transition-colors group cursor-pointer"
                onClick={() => onNavigate(slice.id, 'slice')}
              >
                <TableCell className="font-mono text-xs text-zinc-500">{slice.id}</TableCell>
                <TableCell className="font-medium text-zinc-200">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3 h-3 text-zinc-500" />
                    {slice.name}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={
                      slice.status === 'ACTIVE' 
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                    }
                  >
                    {slice.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {slice.service_ids.map(svcId => (
                      <Badge key={svcId} variant="secondary" className="bg-zinc-900 text-zinc-400 border-zinc-800 text-[10px]">
                        {svcId}
                      </Badge>
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
