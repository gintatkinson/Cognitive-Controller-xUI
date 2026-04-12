
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
import { MoreHorizontal, Share2 } from 'lucide-react';
import { MOCK_LINKS } from '@/lib/mock-data';

interface LinksViewProps {
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
}

export function LinksView({ onNavigate }: LinksViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Network Links</h2>
          <p className="text-zinc-500 text-sm">Physical and logical connections between devices</p>
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-900/50">
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">ID</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Source</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Target</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Capacity</TableHead>
              <TableHead className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Latency</TableHead>
              <TableHead className="text-right text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_LINKS.map((link) => (
              <TableRow 
                key={link.id} 
                className="border-zinc-800 hover:bg-zinc-900/30 transition-colors group cursor-pointer"
                onClick={() => onNavigate(link.id, 'link')}
              >
                <TableCell className="font-mono text-xs text-zinc-500">{link.id}</TableCell>
                <TableCell className="text-zinc-200">
                  <div className="flex flex-col">
                    <span className="font-medium">{link.source}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{link.source_endpoint}</span>
                  </div>
                </TableCell>
                <TableCell className="text-zinc-200">
                  <div className="flex flex-col">
                    <span className="font-medium">{link.target}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{link.target_endpoint}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-zinc-900 text-zinc-400 border-zinc-800 text-[10px]">
                    {link.capacity}
                  </Badge>
                </TableCell>
                <TableCell className="text-zinc-400 text-xs font-mono">{link.latency}</TableCell>
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
