
import React from 'react';
import { TopologyGraph } from '../topology/TopologyGraph';
import { MOCK_DEVICES, MOCK_LINKS } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Maximize2, RefreshCw, ZoomIn, ZoomOut } from 'lucide-react';

interface TopologyViewProps {
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
}

export function TopologyView({ onNavigate }: TopologyViewProps) {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Network Topology</h2>
          <p className="text-zinc-500 text-sm">Visual representation of devices and their interconnections</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-zinc-900 border-zinc-800 text-zinc-400">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="bg-zinc-900 border-zinc-800 text-zinc-400">
            <Maximize2 className="w-4 h-4 mr-2" />
            Fullscreen
          </Button>
        </div>
      </div>

      <div className="flex-1 relative">
        <TopologyGraph devices={MOCK_DEVICES} links={MOCK_LINKS} onNavigate={onNavigate} />
        
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200">
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="secondary" className="bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200">
            <ZoomOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
